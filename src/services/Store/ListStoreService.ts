import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { StoreRepository } from "../../repositories/Store/StoresRepository";
import AuthConfig from "../../config/auth";
import { verify } from "jsonwebtoken";
import AppError from "../../errors/appError";
import Store from "../../models/Stores";


export default class ListStoreService {
    async execute(request: Request): Promise<Store[]> {
        const storeRepository = getCustomRepository(StoreRepository);
        const header = request.headers.authorization?.replace("Bearer", "");                

        if(!header) {
            const allStores = await storeRepository.find();
            return allStores;            
        };        

        const [, token] = header.split(" ")
        const { secret } = AuthConfig.jwt;
        const { sub } = verify(token, secret);

        const stores = await storeRepository.find({
            where: {
                userId: sub
            }
        });
        return stores;
    };
};
