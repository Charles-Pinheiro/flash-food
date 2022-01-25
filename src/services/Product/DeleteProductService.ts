import { DeleteResult, getCustomRepository } from "typeorm";
import AppError from "../../errors/appError";
import { ProductRepository } from "../../repositories/Product/ProductRepository";

export default class DeleteProductService {
    async execute(productId: string): Promise<DeleteResult> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(productId);

        if (!product) {
            throw new AppError("Not found any product with this ID.", 404);
        }

        return productRepository.delete(productId);
    }
}