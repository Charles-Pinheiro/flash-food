import { Request } from "express";
import { getCustomRepository } from "typeorm";
import AuthConfig from "../../config/auth";
import { verify } from "jsonwebtoken";
import AppError from "../../errors/appError";
import Product from "../../models/Products";
import { ProductRepository } from "../../repositories/Product/ProductRepository";


export default class ListProductService {
    async execute(request: Request): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);
        const header = request.headers.authorization?.replace("Bearer", "");                

        if(!header) {
            const allProducts = await productRepository.find();
            return allProducts;            
        };        

        const [, token] = header.split(" ")
        const { secret } = AuthConfig.jwt;
        const { sub } = verify(token, secret);

        const products = await productRepository.find({
            where: {
                userId: sub
            }
        });
        return products;
    };
};
