import { Router } from "express";
import CreateProductController from "../../controller/Products/CreateProductController";
import DeleteProductController from "../../controller/Products/DeleteProductController";
import Authentication from "../../middlewares/Authentication";
import storeOwner from "../../middlewares/StoreOwner";

const productRouter = Router();

const createProduct = new CreateProductController();
const deleteProduct = new DeleteProductController();

productRouter.post(
    "/:store_id",
    Authentication,
    createProduct.handle
);

productRouter.delete(
    "/:store_id/product/:id",
    Authentication,
    deleteProduct.handle
);

export default productRouter;