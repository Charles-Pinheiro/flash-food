import { EntityRepository, Repository } from "typeorm";
import { Store } from "../../models/Stores";


@EntityRepository(Store)
class StoreRepository extends Repository<Store> {};

export {StoreRepository};