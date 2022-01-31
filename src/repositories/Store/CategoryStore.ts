import { EntityRepository, Repository } from "typeorm";
import StoreCategories from "../../models/StoreCategories";


@EntityRepository(StoreCategories)
class CategoryStoreRepository extends Repository<StoreCategories> {};

export {CategoryStoreRepository};