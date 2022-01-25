import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import UpdateStoreService from "../../services/Store/UpdateStoreService";


export default class UpdateStoreController {
    async handle(request: Request, response: Response) {
        const updateStoreService = new UpdateStoreService();

        const store = await updateStoreService.execute(request);

        return response.json(store);
    };
};
