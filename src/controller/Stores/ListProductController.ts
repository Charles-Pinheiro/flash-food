import { Request, Response } from "express";
import ListProductService from "../../services/Store/ListProductService";


export default class ListProductController {
    async handle(request: Request, response: Response) {
        const listProductService = new ListProductService();

        const products = await listProductService.execute(request);

        return response.json(products);

    };
};