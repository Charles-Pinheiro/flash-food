import { Router } from "express";
import CreateStoreController from "../../controller/Stores/CreateStoreController";
import ListStoreByIdController from "../../controller/Stores/ListStoreByIdController";
import ListStoreController from "../../controller/Stores/ListStoreController";
import Authentication from "../../middlewares/Authentication";
import CreateStoreService from "../../services/Store/CreateStoreService";

const storeRouter = Router();

storeRouter.get("/", (request, response) => {
    const listStoreController = new ListStoreController();
    listStoreController.handle(request, response)
});

storeRouter.use(Authentication);

storeRouter.post("/", (request, response) => {
    const createStoreController = new CreateStoreController();
    createStoreController.handle(request,  response);
});

storeRouter.get("/:store_id", (request, response) => {
    const listStoreByIdController = new ListStoreByIdController();
    listStoreByIdController.handle(request, response);
});


export default storeRouter;