import { Request, Response } from "express";
import CreateStoreService from "../../services/Store/CreateStoreService";


class CreateStoreController {
    async handle(request: Request, response: Response) {

        const createStore = new CreateStoreService();
        const store = await createStore.execute(request.body, request.user);        

        return response.status(201).json(store);
    };
};

export default CreateStoreController;