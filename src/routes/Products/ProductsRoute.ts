import { Router } from "express";
import CreateProductController from "../../controller/Products/CreateProductController";
import Authentication from "../../middlewares/Authentication";
import ListStoreController from "../../controller/Stores/ListStoreController";
import ListProductController from "../../controller/Stores/ListProductController";

const productRouter = Router();

const createProduct = new CreateProductController();

productRouter.post(
    "/:store_id",
    Authentication,
    createProduct.handle
);

productRouter.get("/", (request, response) => {
    const listProductController = new ListProductController();
    listProductController.handle(request, response);
})

export default productRouter;