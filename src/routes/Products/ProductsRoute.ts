import { Router } from "express";
import CreateProductController from "../../controller/Products/CreateProductController";
import DeleteProductController from "../../controller/Products/DeleteProductController";
import { productSchema } from "../../controller/Products/schema";
import UpdateProductController from "../../controller/Products/UpdateProductController";
import Authentication from "../../middlewares/Authentication";
import storeOwner from "../../middlewares/StoreOwner";
import validateSchema from "../../middlewares/ValidateSchema";

const productRouter = Router();

const createProduct = new CreateProductController();
const deleteProduct = new DeleteProductController();
const updateProduct = new UpdateProductController(); 

productRouter.post(
    "/:store_id",
    validateSchema(productSchema),
    Authentication,
    createProduct.handle
);

productRouter.delete(
    "/:store_id/product/:id",
    Authentication,
    // storeOwner,
    deleteProduct.handle
);

productRouter.put(
    "/:store_id/product/:id",
    Authentication,
    // storeOwner,
    updateProduct.handle
)

export default productRouter;