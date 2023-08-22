import consola from "consola";
import { NextFunction, Request, Response, raw } from "express";
import { IUserSession } from "../models/interfaces";
import { SESSION_COOKIE_KEY } from "../models/constants";
import { sendError, sendUnExpectedError } from "../utils/utils";
import { ResponseCodes, TableNames } from "../models/enums";
import { pool, redisClient } from "../controllers/db_connection";
import { error } from "console";

function handleSessionExpired(req: Request, res: Response) {
  if (req.cookies[SESSION_COOKIE_KEY]) {
    // CLEAR COOKIE
    res.clearCookie(SESSION_COOKIE_KEY, { httpOnly: true });
  }
  sendError(
    res,
    ResponseCodes.UnAuthorized,
    "Session expired! Please login to continue."
  );
}

export default async function checkUserAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const sessionId: string = req.cookies[SESSION_COOKIE_KEY];
  if (!sessionId) {
    // session expire
    return handleSessionExpired(req, res);
  }
  try {
    //search for session object within redis first
    const cache = await redisClient.get(sessionId);
    let session: IUserSession | undefined;
    if (cache) {
      //User data from redis cache and no need to query from DB
      session = JSON.parse(cache);
    } else {
      //Serch for user session in DB
      const sql = `SELECT * FROM ${TableNames.UserSessions} WHERE session_id = $1`;
      const sessionRes = await pool.query(sql, [sessionId]);
      if (sessionRes.rowCount === 0) return handleSessionExpired(req, res);

      session = <IUserSession>sessionRes.rows[0];
      const now = new Date();
      if (session.expired_at < now) return handleSessionExpired(req, res);
    } // session is good to go
    req.userSession = session;
    next();
  } catch (ex) {
    console.error("Error session habler:", ex);
    sendUnExpectedError(res);
  }
}
