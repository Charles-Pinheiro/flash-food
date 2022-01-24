import { Router } from "express";
import CreateStoreController from "../../controller/Stores/CreateStoreController";
import Authentication from "../../middlewares/Authentication";
import CreateStoreService from "../../services/Store/CreateStoreService";

const storeRouter = Router();

storeRouter.use(Authentication);

const createStore = new CreateStoreController();
storeRouter.post("/", createStore.handle);

export default storeRouter;