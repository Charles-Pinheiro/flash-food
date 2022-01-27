import { Router } from "express";
import CreateProductController from "../../controller/Products/CreateProductController";
import DeleteProductController from "../../controller/Products/DeleteProductController";
import UpdateProductController from "../../controller/Products/UpdateProductController";
import Authentication from "../../middlewares/Authentication";
import storeOwner from "../../middlewares/StoreOwner";

const productRouter = Router();

const createProduct = new CreateProductController();
const deleteProduct = new DeleteProductController();
const updateProduct = new UpdateProductController(); 

productRouter.post(
    "/:store_id",
    Authentication,
    createProduct.handle
);

productRouter.delete(
    "/:store_id/product/:id",
    Authentication,
    storeOwner,
    deleteProduct.handle
);

productRouter.put(
    "/:store_id/product/:id",
    Authentication,
    storeOwner,
    updateProduct.handle
)

export default productRouter;