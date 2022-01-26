import { Router } from "express";
import CreateStoreController from "../../controller/Stores/CreateStoreController";
import DeleteStoreController from "../../controller/Stores/DeleteStoreController";
import ListProductByStoreController from "../../controller/Stores/ListProductByStoreController";
import ListStoreByIdController from "../../controller/Stores/ListStoreByIdController";
import ListStoreByLocalizationController from "../../controller/Stores/ListStoreByLocalizationController";
import ListStoreController from "../../controller/Stores/ListStoreController";
import { storeSchema } from "../../controller/Stores/schema";
import UpdateStoreController from "../../controller/Stores/UpdateStoreController";
import Authentication from "../../middlewares/Authentication";
import validateSchema from "../../middlewares/ValidateSchema";
import CreateStoreService from "../../services/Store/CreateStoreService";

const storeRouter = Router();

storeRouter.get("/", (request, response) => {
    const listStoreController = new ListStoreController();
    listStoreController.handle(request, response)
});

storeRouter.use(Authentication);

storeRouter.post("/", validateSchema(storeSchema), (request, response) => {
    const createStoreController = new CreateStoreController();
    createStoreController.handle(request,  response);
});

storeRouter.get("/:store_id", (request, response) => {
    const listStoreByIdController = new ListStoreByIdController();
    listStoreByIdController.handle(request, response);
});

storeRouter.put("/:store_id", validateSchema(storeSchema), (request, response) => {
    const updateStoreController = new UpdateStoreController();
    updateStoreController.handle(request, response);
});

storeRouter.delete("/:store_id", (request, response) => {
    const deleteStoreController = new DeleteStoreController();
    deleteStoreController.handle(request, response);
});

storeRouter.get("/:store_id/products", (request, response) => {        
    const listProductByStoreController = new ListProductByStoreController()
    listProductByStoreController.handle(request, response);
});

storeRouter.get("/category/range", (request, response) => {    
    const listStoreByLocalizationService = new ListStoreByLocalizationController();
    listStoreByLocalizationService.handle(request,response);
});

export default storeRouter;
