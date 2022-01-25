import { EntityRepository, Repository } from "typeorm";
import ProductCategory from "../../models/ProductCategories";

@EntityRepository(ProductCategory)
class CategoryProductRepository extends Repository<ProductCategory> {};

export {CategoryProductRepository};