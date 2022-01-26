import { Request } from "express";
import { TomTom } from "tomtom-lib";
import { getCustomRepository } from "typeorm";
import AppError from "../../errors/appError";
import { AddressRepository } from "../../repositories/AddressRepository";
import { StoreRepository } from "../../repositories/Store/StoresRepository";
import CreateCategoryStoreService from "./CreateCategoryStoreService";


interface StoreRequest {
    name: string;
    category: string;
    street: string;
    district: string;
    number: number;
    city: string;
    state: string;
    cep: string;
};

export default class UpdateStoreService {
    public async execute(request: Request ) {
        const tomtomKey: string = process.env.TOMTOM_KEY!;
        const tomtom = new TomTom(tomtomKey);

        const storeRequest: StoreRequest = request.body;
        const storeId = request.params.store_id;        
        const storeRepository = getCustomRepository(StoreRepository);
        const createStoreCategory = new CreateCategoryStoreService();
        const addressRepository = getCustomRepository(AddressRepository);

        try{
            const updateStore = await storeRepository.findOne(storeId)

            if(!updateStore) {
                throw new AppError("Store not found.", 404);
            };

            if(updateStore.userId !== request.user.id) {
                throw new AppError("No permission for this store.", 403);
            };

            const address = await addressRepository.findOne(updateStore.addressId);
            if(!address) {
                throw new AppError("Address not found.", 404);
            };

            const responseCoordinate = await tomtom.geocoding({
                street: storeRequest.street,
                district: storeRequest.district,
                city: storeRequest.city,
                state: storeRequest.state,
                cep: storeRequest.cep,
                number: storeRequest.number
            });

            if (typeof responseCoordinate == "string") {
                throw new AppError("Addressaddresss not found.", 404);
            };

            address.street = storeRequest.street;
            address.district = storeRequest.district;
            address.city = storeRequest.city;
            address.state = storeRequest.state;
            address.cep = storeRequest.cep;
            address.number = storeRequest.number;
            address.coordinate = responseCoordinate.coordinates;
            
            await addressRepository.save(address);

            const categoryStore = await createStoreCategory.execute(storeRequest.category);

            updateStore.categoryId = categoryStore.store_category_id;
            updateStore.name = storeRequest.name;

            await storeRepository.save(updateStore);
        }catch(err) {                
                throw new AppError("Update Failed.");
        };
        const newStore = await storeRepository.findOne(storeId);

        return newStore;
        
    };
};