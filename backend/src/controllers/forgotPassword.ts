import { Request, Response } from "express";
import dotenv from "dotenv";
import { pool, redisClient } from "./db_connection";
import { ResponseCodes } from "../models/enums";
import { TableNames } from "../models/enums";
import { sendMailAsync } from "./mail_handler";
import {
  sendError,
  sendUnExpectedError,
  sendData,
  hashPassword,
} from "../utils/utils";

dotenv.config();

export async function forgotPassword(req: Request, res: Response) {
  const { email } = req.body;
  // const Code = generateUUID(email);
  const url = "http://localhost:8080/changPass";

  const codeRandom = Math.floor(100000 + Math.random() * 900000);

  try {
    let query = `SELECT * FROM ${TableNames.Users} WHERE email = $1`;
    const dbRes = await pool.query(query, [email]);

    // check email have been register

    if (dbRes.rowCount === 0) {
      sendError(
        res,
        ResponseCodes.UserPasswordIncorrect,
        "Your email did't register yet!"
      );
      return;
    }

    // check email id verified or not

    if (!dbRes.rows[0].email_verified) {
      return sendError(
        res,
        ResponseCodes.EmailNotVerified,
        "Email has not been verified yet!"
      );
    }

    // Set expiration time for the code (e.g., 1 minute from now)

    const codeExpiration = 60 ;

    // Store code id to redis
    await redisClient.setEx(
      codeRandom.toString(),
      codeExpiration,
      email
    );

    await sendMailAsync(
      "Code to reset password",
      email,
      `This is the code that you cen reset you password it have time 1 minutes to use this code  <hr><h2>${codeRandom}</h2>
      Please click <a href="${url}">here</a> to reset your password.
      `
    );
    sendData(res, {
      message:
        "We have sent an email with 6-digit numberto your email. please click your email and use code to resset password",
    });
  } catch (ex) {
    console.error("Error user forgot password", ex);
    sendUnExpectedError(res);
  }
}

export async function resetNewPass(req: Request, res: Response) {
  const { code, newPassword } = req.body;
  const email = await redisClient.get(code);
  try {
    if (!email) {
      return sendError(res, ResponseCodes.codeExpiration, "Code invalited");
    }
    const newPasswordHash = hashPassword(newPassword);
    const sql = `UPDATE ${TableNames.Users} SET password = $1, updated_at = $2  WHERE email = $3 `;
    await pool.query(sql, [newPasswordHash, new Date(), email]);
    sendData(res, {
      message: "You reset password successfully",
    });
  } catch (ex) {
    console.error("Error user reset", ex);
    sendUnExpectedError(res);
  }
}
