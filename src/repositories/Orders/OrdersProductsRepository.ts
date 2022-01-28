import { EntityRepository, Repository } from "typeorm";
import OrdersProducts from "../../models/OrdersProducts";

@EntityRepository(OrdersProducts)
class OrdersProductsRepository extends Repository<OrdersProducts> {}

export { OrdersProductsRepository };
