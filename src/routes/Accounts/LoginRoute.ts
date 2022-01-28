import { Router } from "express";
import LoginController from "../../controller/Accounts/LoginController";
import { loginSchema } from "../../controller/Accounts/loginSchema";
import validateSchema from "../../middlewares/ValidateSchema";

const LoginRouter = Router();

const loginController = new LoginController();

LoginRouter.post("/", validateSchema(loginSchema), loginController.handle);

export default LoginRouter;
