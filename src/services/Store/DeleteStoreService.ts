import { Request } from "express";
import { DeleteResult, getCustomRepository } from "typeorm";
import AppError from "../../errors/appError";
import { StoreRepository } from "../../repositories/Store/StoresRepository";

export default class DeleteStoreService {
    async execute(request: Request): Promise<DeleteResult> {
        const storeId = request.params.store_id;        
        const storeRepository = getCustomRepository(StoreRepository);

        const store = await storeRepository.findOne(storeId);

        if(!store) {
            throw new AppError("Not found any store with this ID.", 404);
        };

        if(store.userId !== request.user.id) {
            throw new AppError("No permission for this store.", 403);
        };
        return storeRepository.delete(storeId);
        
    };
};
