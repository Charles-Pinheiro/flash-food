import { getCustomRepository } from "typeorm";
import AppError from "../../errors/appError";
import Product from "../../models/Products";
import { ProductRepository } from "../../repositories/Product/ProductRepository";
import { StoreRepository } from "../../repositories/Store/StoresRepository";
import CreateCategoryProductService from "./CreateCategoryProductService";

interface ProductRequest {
    name: string;
    price: number;
    category: string;
}

export default class CreateProductService {
    public async execute(productRequest: ProductRequest, store_id: string){
        const {name, price, category} = productRequest;

        const createProductCategory = new CreateCategoryProductService();
        const categoryProduct = await createProductCategory.execute(category);

        const productRepository = getCustomRepository(ProductRepository);

        const createStoreCategory = getCustomRepository(StoreRepository);
        const store = await createStoreCategory.findOne({store_id});

        if (!store) {
            throw new AppError('store not found!', 404);
        }

        const product = productRepository.create({
            category: categoryProduct,
            price,
            name,
            store
        });

        await productRepository.save(product);
        return product;

    };
};