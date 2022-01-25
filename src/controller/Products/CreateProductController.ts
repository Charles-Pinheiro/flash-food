import { Request, Response } from "express";
import CreateProductService from "../../services/Product/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {

        const createProduct = new CreateProductService();
        const product = await createProduct.execute(request.body);        

        return response.status(201).json(product);
    };
};

export default CreateProductController;