import { getCustomRepository } from "typeorm";
import Product from "../../models/Products";
import { ProductRepository } from "../../repositories/Product/ProductRepository";
import CreateCategoryProductService from "./CreateCategoryProductService";

interface ProductRequest {
    name: string;
    price: number;
    category: string;
}

export default class CreateProductService {
    public async execute(productRequest: ProductRequest): Promise<Product> {
        const {name, price, category} = productRequest;

        const createProductCategory = new CreateCategoryProductService();
        const categoryProduct = await createProductCategory.execute(category);

        const productRepository = getCustomRepository(ProductRepository);

        const product = productRepository.create({
            category: categoryProduct,
            price,
            name,
        });

        await productRepository.save(product);
        return product;
    };
};