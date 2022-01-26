import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { StoreRepository } from "../../repositories/Store/StoresRepository";
import AppError from "../../errors/appError";
import { ProductRepository } from "../../repositories/Product/ProductRepository";
import Product from "../../models/Products";
import { CategoryProductRepository } from "../../repositories/Product/CategoryProduct";


export default class ListProductByStoreService {
    async execute(request: Request): Promise<Product[]> {
        const productsRepository = getCustomRepository(ProductRepository);
        const storeRepository = getCustomRepository(StoreRepository)
        const categoryProduct = getCustomRepository(CategoryProductRepository)
        const storeId = request.params.store_id;
        const sendedCategory = request.query.category;

        if(typeof sendedCategory == "string") {
            const category = await categoryProduct.findOne({
                name: sendedCategory
            });

            if(category) {
                const products = await productsRepository.find({
                    where: {
                        category: category.id
                    }
                });
                return products;

            } else {
                throw new AppError("No products for this category", 404);
            };
        };

        try {
            const store = await storeRepository.findOne(storeId);

            if(!store) {
                throw new AppError("Store not found.", 404);
            };

            if(store.userId !== request.user.id) {
                throw new AppError("No permission to view products from this store.", 403);
            };

            const products = await productsRepository.find({
                where: {
                    store: storeId
                }
            });
            return products;

        }catch(err) {                                    
            throw new AppError("AppError");
        };
    };
};
