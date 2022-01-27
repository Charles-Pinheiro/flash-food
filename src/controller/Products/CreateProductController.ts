import { Request, Response } from "express";
import AppError from "../../errors/appError";
import CreateProductService from "../../services/Product/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const createProduct = new CreateProductService();
        const { store_id } = request.params;

        return await createProduct.execute(request.body, store_id).then(
            res => {return response.json(res)}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})
        });
    };
};

export default CreateProductController;