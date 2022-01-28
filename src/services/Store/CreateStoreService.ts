import { getCustomRepository } from "typeorm";
import Store from "../../models/Stores";
import { StoreRepository } from "../../repositories/Store/StoresRepository";
import CreateAddressService from "../Address/CreateAddress";
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

interface UserId {
    id: string;
}

export default class CreateStoreService {
    public async execute(storeRequest: StoreRequest, userId: UserId ): Promise<Store> {
        const {name, category, street, district, number, city, state, cep} = storeRequest;

        const createStoreCategory = new CreateCategoryStoreService();
        const categoryStore = await createStoreCategory.execute(category);
        

        const createAddress = new CreateAddressService();
        const address = await createAddress.execute({
            street,
            district,
            number,
            city,
            state,
            cep,
        });
        
        const storeRepository = getCustomRepository(StoreRepository);
        
        const store = storeRepository.create({
            categoryId: categoryStore.store_category_id,
            addressId: address.id,
            userId: userId.id,
            name,
            address:address,
            storeCategories: categoryStore
        });
        await storeRepository.save(store);
        return store;
        
    };
};