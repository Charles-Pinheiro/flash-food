import { Request, Response } from 'express';
import AppError from '../../errors/appError';
import DeleteProductService from "../../services/Product/DeleteProductService";

export default class DeleteProductController {
    async handle(request: Request, response: Response) {
        const deleteProductService = new DeleteProductService();

        const { id } = request.params;
        return deleteProductService.execute(id).then(
            res => {return response.status(204).json(res)}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})
        });
    }
}