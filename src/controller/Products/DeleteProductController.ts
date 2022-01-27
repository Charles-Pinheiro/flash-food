import { Request, Response } from 'express';
import DeleteProductService from "../../services/Product/DeleteProductService";

export default class DeleteProductController {
    async handle(request: Request, response: Response) {
        const deleteProductService = new DeleteProductService();

        const { id } = request.params;
        const product = await deleteProductService.execute(id);

        return response.status(204).json(product);
    }
}