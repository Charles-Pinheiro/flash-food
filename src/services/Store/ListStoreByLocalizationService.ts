import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { StoreRepository } from "../../repositories/Store/StoresRepository";
import AppError from "../../errors/appError";
import { CategoryStoreRepository } from "../../repositories/Store/CategoryStore";
import { UserRepository } from "../../repositories/UserReposytory";
import { TomTom } from "tomtom-lib";


export default class ListStoreByLocalizationService {
    async execute(request: Request) {
        const storeRepository = getCustomRepository(StoreRepository);
        const categoryStore = getCustomRepository(CategoryStoreRepository);
        const userRepository = getCustomRepository(UserRepository);
        const sendedCategory = request.query.category;

        const tomtomKey: string = process.env.TOMTOM_KEY!;
        const tomtom = new TomTom(tomtomKey);

        const user = await userRepository.findOne(request.user.id);

        if(!user) {
            throw new AppError("User not found.", 404);
        };        
        
        if(typeof sendedCategory !== "string") {
            throw new AppError("No stores for this category", 404);
        };

        const category = await categoryStore.findOne({
            name: sendedCategory.toLowerCase()
        });

        if(category) {
            const stores = await storeRepository.find({
                where: {
                    categoryId: category.store_category_id
                }
            });

            const storeRange = await tomtom.calculateRoute(
                user.address.coordinate, stores
                );
            
            return storeRange;

        } else {
            throw new AppError("No stores for this category", 404);
        };
    };
};
