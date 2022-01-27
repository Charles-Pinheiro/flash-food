import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import ListStoreByIdService from "../../services/Store/ListStoreByIdService";


export default class ListStoreByIdController {
    async handle(request: Request, response: Response) {
        const listStoreByIdService = new ListStoreByIdService();

        const store = await listStoreByIdService.execute(request);

        return response.json(classToClass(store));

    };
};