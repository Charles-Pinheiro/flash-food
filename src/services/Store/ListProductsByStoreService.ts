import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { StoreRepository } from "../../repositories/Store/StoresRepository";
import AppError from "../../errors/appError";
import { ProductRepository } from "../../repositories/Product/ProductRepository";
import Product from "../../models/Products";


export default class ListProductByStoreService {
    async execute(request: Request): Promise<Product[]> {
        const productsRepository = getCustomRepository(ProductRepository);
        const storeRepository = getCustomRepository(StoreRepository)
        const storeId = request.params.store_id;
        
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
