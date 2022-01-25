import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { StoreRepository } from "../../repositories/Store/StoresRepository";
import AppError from "../../errors/appError";
import Store from "../../models/Stores";


export default class ListStoreByIdService {
    async execute(request: Request): Promise<Store[]> {
        const storeRepository = getCustomRepository(StoreRepository);
        const storeId = request.params.store_id;        

        try {
            const stores = await storeRepository.find({
                where: {
                    userId: request.user.id
                }
            });

            const filteredStores = stores.filter((store) => {                
                return store.store_id == storeId
            });                        
            return filteredStores;

        }catch(err) {            
            throw new AppError("Inválid Token");
        };
    };
};
