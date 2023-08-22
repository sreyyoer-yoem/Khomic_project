import { Request, Response } from "express";
import consola from "consola";
import dotenv from "dotenv";
import { registerValidation } from "../models/validation";
import { pool, redisClient } from "./db_connection";
import { ResponseCodes } from "../models/enums";
import { TableNames } from "../models/enums";
import { sendMailAsync } from "./mail_handler";
import {
  sendError,
  hashPassword,
  generateUUID,
  sendData,
  sendUnExpectedError,
} from "../utils/utils";

dotenv.config();

export async function registerUser(req: Request, res: Response) {
  let data: any;
  try {
    data = await registerValidation.validateAsync(req.body);
  } catch (ex) {
    consola.error(ex.details);
    return res.status(201).send(ex.details);
  }
  const { first_name, last_name, email, password } = data;

  try {
    // SAVE DATA USER TO PROGESS
    const query = `INSERT INTO ${TableNames.Users} (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id`;
    const hashPass = hashPassword(password);
    const insertUser = await pool.query(query, [
      first_name,
      last_name,
      email,
      hashPass,
    ]);

    const userId = insertUser.rows[0].id;
    const verificationCode = generateUUID(email);
    const url = process.env.VERFICATION_URL + "/" + verificationCode;

    // SAVE VERIFECATION CODE TO CATCH
    await redisClient.setEx(verificationCode, 24 * 60 * 60, userId.toString());

    // Send verification url to user's email
    await sendMailAsync(
      "Email Verification",
      email,
      `Please click <a href="${url}">here</a> to verify your email.`
    );

    sendData(res, {
      message:
        "We have sent an email with verification url to your email. please click that url to verify your email.",
    });
    // return res.status(200).send("We have sent an email with verification url to your email. please click that url to verify your email.")
  } catch (ex: any) {
    if (ex.code === "23505") {
      sendError(res, ResponseCodes.APIError, "Email is already taken.");
      return;
    }
    console.error("Error create a new user: ", ex);
    sendUnExpectedError(res);
  }
}

export async function verificationEmail(req: Request, res: Response) {
  const { verify_code } = req.params;

  if (!verify_code) {
    return sendError(res, ResponseCodes.APIError, "Invalid Request!");
  }
  try {
    // SEARCH VERIFICATION CODE IN CACHE
    const user_id = await redisClient.get(verify_code);
    if (!user_id) {
      return sendError(
        res,
        ResponseCodes.APIError,
        "Invalit verification code!"
      );
    }

    const query = `UPDATE ${TableNames.Users} SET email_verified = $1, updated_at = $2 WHERE id = $3 `;
    await pool.query(query, [true, new Date(), parseInt(user_id)]);

    // CLEAR USER ID IN REDIS
    await redisClient.del(verify_code);

    // IF IT OK IT WIIL CONTINUE WITH LOGIN

    res.redirect("http://localhost:8080/login");
  } catch (ex) {
    consola.error("Error verification email:", ex);
    sendUnExpectedError(res);
  }
}


export async function sessionHandler(req: Request, res: Response) {
  sendData(res, req.userSession);
  
}
