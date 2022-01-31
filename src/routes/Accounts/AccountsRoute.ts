import { Router } from "express";
import CreateUserController from "../../controller/Accounts/CreateUserController";
import { userSchema } from "../../controller/Accounts/schema";
import checkingUserData from "../../middlewares/CheckingUserData";
import validateSchema from "../../middlewares/ValidateSchema";

const accountsRouter = Router();

const createUserController = new CreateUserController();

accountsRouter.post(
  "/",
  validateSchema(userSchema),
  checkingUserData,
  createUserController.handle
);

export default accountsRouter;
