import { Router } from "express";
import CreateOrdersController from "../../controller/Orders/CreateOrdersControllers";
import ListOrdersController from "../../controller/Orders/ListOrdersController";
import Authentication from "../../middlewares/Authentication";

const ordersRouter = Router();

const createOrderscontroller = new CreateOrdersController();
const listOrdersController = new ListOrdersController();

ordersRouter.post("/", Authentication, createOrderscontroller.handle);

ordersRouter.get("/", Authentication, listOrdersController.handle);

export default ordersRouter;
