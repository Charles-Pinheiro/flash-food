import { Router } from "express";
import accountsRouter from "./Accounts/AccountsRoute";
import LoginRouter from "./Accounts/LoginRoute";
import storeRouter from "./Stores/StoresRoute";

const router = Router();

router.use("/accounts", accountsRouter);
router.use("/login", LoginRouter);
router.use("/store", storeRouter);

export default router;
