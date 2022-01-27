import { Router } from "express";
import CreateOrdersController from "../../controller/Orders/CreateOrdersControllers";
import Authentication from "../../middlewares/Authentication";

const ordersRouter = Router();

const createOrderscontroller = new CreateOrdersController();

ordersRouter.post("/", Authentication, createOrderscontroller.handle);

export default ordersRouter;
