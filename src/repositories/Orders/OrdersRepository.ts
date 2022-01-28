import { EntityRepository, Repository } from "typeorm";
import Orders from "../../models/Orders";

@EntityRepository(Orders)
class OrdersRepository extends Repository<Orders> {}

export { OrdersRepository };
