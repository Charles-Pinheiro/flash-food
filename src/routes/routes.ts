import { Router } from "express";
import accountsRouter from "./Accounts/AccountsRoute";
import LoginRouter from "./Accounts/LoginRoute";

const router = Router();

router.use("/accounts", accountsRouter);
router.use("/login", LoginRouter);

export default router;
