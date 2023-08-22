import { Router } from "express";

import {
  registerUser,
  verificationEmail,
  sessionHandler,
} from "../controllers/register_handlers";
import { loginUser } from "../controllers/login_handlers";
import { logoutUser } from "../controllers/logout_handlers";
import checkUserAuth from "../middlewares/auth_checker";
import { forgotPassword } from "../controllers/forgotPassword";
import { resetNewPass } from "../controllers/forgotPassword";


const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/verification/:verify_code", verificationEmail);
router.post("/forgotpassword",forgotPassword);
router.post("/resetNewPass", resetNewPass)


router.use(checkUserAuth);
router.get("/session", sessionHandler);

export default router;
