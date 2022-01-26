import { Request, Response } from "express";
import ListStoreByLocalizationService from "../../services/Store/ListStoreByLocalizationService";


export default class ListStoreByLocalizationController {
    async handle(request: Request, response: Response) {
        const listStoreByLocalizationService = new ListStoreByLocalizationService();        

        const stores = await listStoreByLocalizationService.execute(request);

        return response.json(stores);
    };
};