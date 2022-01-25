import { Request, Response } from "express";
import DeleteStoreService from "../../services/Store/DeleteStoreService";

export default class DeleteStoreController {
    async handle(request: Request, response: Response) {
        const deleteStoreService = new DeleteStoreService();

        const stores = await deleteStoreService.execute(request);

        return response.status(204).json(stores);

    };
};