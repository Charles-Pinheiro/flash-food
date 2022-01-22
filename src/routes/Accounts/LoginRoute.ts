import { Router } from "express";
import LoginController from "../../controller/Accounts/LoginController";

const LoginRouter = Router();

const loginController = new LoginController();

LoginRouter.post("/", loginController.handle);

export default LoginRouter;
