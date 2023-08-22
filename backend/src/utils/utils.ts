import { Request, Response } from "express";
import crypto from "crypto";
import { v5 } from "uuid";
import { ResponseCodes } from "../models/enums";

/**
 * Function for sending success response with data
 * @param res Response object
 * @param data Data to be send. Can be null
 */
export function sendData(res: Response, data: any) {
    res.status(200).send({
        code: ResponseCodes.Success,
        data: data,
    });
}

/**
 * Function for sending error response with error message to client
 * @param res Express response object
 * @param errorCode Error code number
 * @param message Error message
 */
export function sendError(
    res: Response,
    errorCode: ResponseCodes,
    message: string
) {
    res.status(400).send({
        code: errorCode,
        error: message,
    });
}

/**
 * Convert input password into a sha256 hash password
 * @param pass origin password
 * @returns Hash 256 password string
 */
export function hashPassword(pass: string): string {
    // Creating a unique salt for a particular user
    const salt = process.env.PASSWORD_SALT || "Iamsosecure";

    return crypto.pbkdf2Sync(pass, salt, 1000, 64, `sha256`).toString(`hex`);
}

/**
 * Generate a unique identifier string with specified value
 * @param val String value that will be used to generate UUID
 * @returns Unique identifier string
 */
export function generateUUID(val: string): string {
    const nameSpace =
        process.env.UUID_NAMESPACE || "da4369dc-08b7-420f-b354-1bb606e85683";
    return v5(val, nameSpace);
}

/**
 * Retrieve user's IP from request object
 * @param req Express request object
 */
export function getClientIP(req: Request): string {
    console.log(req.header("x-forwarded-for"));
    return req.header("x-forwarded-for") || req.socket.remoteAddress || "NO-IP";
}

/**
 * Send unexpected error response back to client
 * @param res Response object
 * @param message Custom error message (Optional)
 */
export function sendUnExpectedError(res: Response, message?: string) {
    res.status(500).send({
        code: ResponseCodes.InternalServerError,
        error: message || "Server encountered unexpected error.",
    });
}