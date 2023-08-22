import { Request, Response } from "express";
import { SESSION_COOKIE_KEY } from "../models/constants";
import { TableNames } from "../models/enums";
import { sendData, sendUnExpectedError } from "../utils/utils";
import { pool, redisClient } from "./db_connection";

export async function logoutUser(req: Request, res: Response) {
  const sessionId: string = req.cookies[SESSION_COOKIE_KEY];
  try {
    if (sessionId) {
      const queryUpdate = `UPDATE ${TableNames.UserSessions} SET expired_at = $1 WHERE session_id = $2`;
      await pool.query(queryUpdate, [new Date(), sessionId]);

      await redisClient.del(sessionId);
    }
    res.clearCookie(SESSION_COOKIE_KEY, { httpOnly: true });

    sendData(res, "You logouted successfully");
  } catch (ex) {
    console.error("Error create a new user:", ex);
    sendUnExpectedError(res);
  }
}
