import { Request, Response } from "express";
import ListStoreService from "../../services/Store/ListStoreService";


export default class ListStoreController {
    async handle(request: Request, response: Response) {
        const listStoreService = new ListStoreService();

        const stores = await listStoreService.execute(request);

        return response.json(stores);

    };
};