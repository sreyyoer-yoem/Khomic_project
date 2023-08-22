import { IUserSession } from "../models/interfaces";

declare module "express" {
  interface Request {
    userSession?: IUserSession;
  }
}
