import { getCustomRepository } from "typeorm";
import AppError from "../../errors/appError";
import { CategoryProductRepository } from "../../repositories/Product/CategoryProduct";
import { ProductRepository } from "../../repositories/Product/ProductRepository";
import CreateCategoryProductService from "./CreateCategoryProductService";

interface ProductRequest {
    id?: string;
    name: string;
    price: number;
    category: string;
}

export default class UpdateProductService {
    async execute(productId: string, body: ProductRequest) {
        const productRepository = getCustomRepository(ProductRepository);
        const categoryRepository = getCustomRepository(CategoryProductRepository);
        const createProductCategory = new CreateCategoryProductService();

       try{
        const product = await productRepository.findOne(productId);
        // const category = await categoryRepository.findOne(body.category);
        // if (!category) {
        //     const createProductCategory = new CreateCategoryProductService();
        //     createProductCategory.execute(body.category);
        // }
        const category = await createProductCategory.execute(body.category);

        if (!product) {
            throw new AppError('Not found any product with this ID.', 404);
        }
        console.log(category);
        

        product.name = body.name;
        product.price = body.price;
        if (category) {
            product.category = category;
        }

        await productRepository.save(product);

        const updatedProduct = await productRepository.findOne(productId);

        return updatedProduct;
       }catch(err){
           console.log(err);
           
       }
    }
}