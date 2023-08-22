import { Request, Response } from "express";
import { loginValidation } from "../models/validation";
import { consola } from "consola";
import {
  generateUUID,
  getClientIP,
  hashPassword,
  sendData,
  sendError,
  sendUnExpectedError,
} from "../utils/utils";
import { ResponseCodes, TableNames } from "../models/enums";
import { pool, redisClient } from "./db_connection";
import { IUser } from "../models/interfaces";
import dotenv from "dotenv";
import { SESSION_COOKIE_KEY } from "../models/constants";

dotenv.config();
export async function createNewUserLoginSession(
  req: Request,
  res: Response,
  user: IUser
) {
  //Todo: Check if the suer's email has
  // been verified or not
  if (!user.email_verified) {
    //! User email has not been verified. We need Block this process
    return sendError(
      res,
      ResponseCodes.EmailNotVerified,
      "Email has not been verified yet."
    );
  }
  //If User have all informaion is correct
  // Create a new session and return session-id back to the client
  const sessionDurationInSeconds = parseInt(
    process.env.SESSION_DURATIN || "604800"
  );

  const sessionExpireDate = new Date(
    Date.now() + sessionDurationInSeconds * 1000
  );

  const sessionId = generateUUID(user.email + Date.now());
  const clientIP = getClientIP(req);

  //   * for sessionData is information of user
  const sessionData = {
    user_id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  };

  // Create informaion of user_session in database
  const query = `INSERT INTO ${TableNames.UserSessions} VALUES ($1, $2, $3, $4, $5, $6)`;
  await pool.query(query, [
    sessionId,
    user.id,
    clientIP,
    sessionData,
    new Date(),
    sessionExpireDate,
  ]);
  // store session data into cache
  await redisClient.setEx(
    sessionId,
    sessionDurationInSeconds,
    JSON.stringify(sessionData)
  );
  //SET COOKIE
  res.cookie(SESSION_COOKIE_KEY, sessionId, {
    httpOnly: true,
    expires: sessionExpireDate,
  });
  sendData(res, sessionData);
}

export async function loginUser(req: Request, res: Response) {
  let data: any;
  try {
    data = await loginValidation.validateAsync(req.body);
  } catch (ex) {
    return res.status(400).send(ex.details);
  }
  const { email, password } = data;

  // First search if the database has user with the same email
  try {
    let query = `SELECT * FROM ${TableNames.Users} WHERE email = $1`;
    const dbRes = await pool.query(query, [email]);
    // console.log(dbRes.rowCount);

    if (dbRes.rowCount === 0) {
      sendError(
        res,
        ResponseCodes.UserPasswordIncorrect,
        "email or password is incorrect"
      );
      return;
    }
    const user: IUser = dbRes.rows[0];
    if (user.password !== hashPassword(password)) {
      // Incorrect password
      sendError(
        res,
        ResponseCodes.UserPasswordIncorrect,
        "Email or Password is incorrect"
      );
      return;
    }
    await createNewUserLoginSession(req, res, user);
  } catch (ex) {
    console.error("Error user login", ex);
    sendUnExpectedError(res);
  }
}
