import { Request, Response } from "express";
import ListProductByStoreService from "../../services/Store/ListProductsByStoreService";


export default class ListProductByStoreController {
    async handle(request: Request, response: Response) {
        const listproductByStoreService = new ListProductByStoreService();        

        const products = await listproductByStoreService.execute(request);        

        return response.json(products);

    };
};