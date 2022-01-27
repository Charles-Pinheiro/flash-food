import { getCustomRepository } from "typeorm";
import StoreCategories from "../../models/StoreCategories";
import { CategoryStoreRepository } from "../../repositories/Store/CategoryStore";


export default class CreateCategoryStoreService {
    public async execute(name: string): Promise<StoreCategories> {
        const categoryStoreRepository = getCustomRepository(CategoryStoreRepository);

        const categoryStore = await categoryStoreRepository.findOne({
            name: name.toLowerCase()
        });
        
        if(!categoryStore) {
            const newCategory = categoryStoreRepository.create({
                name: name.toLowerCase()
            });

            await categoryStoreRepository.save(newCategory);

            return newCategory;

        };
        return categoryStore;
       
    };
};
