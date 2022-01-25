import { getCustomRepository } from "typeorm";
import ProductCategory from "../../models/ProductCategories";
import { CategoryProductRepository } from "../../repositories/Product/CategoryProduct";

export default class CreateCategoryProductService {
    public async execute(name: string): Promise<ProductCategory> {
        const categoryProductRepository = getCustomRepository(CategoryProductRepository);

        const categoryProduct = await categoryProductRepository.findOne({
            name,
        });

        if (!categoryProduct) {
            const newCategory = categoryProductRepository.create({
                name,
            });

            await categoryProductRepository.save(newCategory);

            return newCategory;
        };
        return categoryProduct;
    };
};