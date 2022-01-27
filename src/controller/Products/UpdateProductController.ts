import { Request, Response } from "express";
import AppError from "../../errors/appError";
import UpdateProductService from "../../services/Product/UpdateProductService";

export default class UpdateProductController {
    async handle(request: Request, response: Response) {
        const updateProductService = new UpdateProductService();

        const { id } = request.params;
        return await updateProductService.execute(id, request.body).then(
            res => {return response.json(res)}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})    
        });
    };
}