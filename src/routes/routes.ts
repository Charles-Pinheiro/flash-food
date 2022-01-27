import { Router } from "express";
import accountsRouter from "./Accounts/AccountsRoute";
import LoginRouter from "./Accounts/LoginRoute";
import ordersRouter from "./Orders/OrdersRouter";
import productRouter from "./Products/ProductsRoute";
import storeRouter from "./Stores/StoresRoute";

const router = Router();

router.use("/accounts", accountsRouter);
router.use("/login", LoginRouter);
router.use("/store", storeRouter);
router.use("/products", productRouter);
router.use("/store/:store_id/orders", ordersRouter);

export default router;
