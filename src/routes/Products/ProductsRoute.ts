import { Router } from "express";
import CreateProductController from "../../controller/Products/CreateProductController";
import Authentication from "../../middlewares/Authentication";

const productRouter = Router();

const createProduct = new CreateProductController();

productRouter.post(
    "/:store_id",
    Authentication,
    createProduct.handle
);

export default productRouter;