import { getCustomRepository } from "typeorm";
import AppError from "../../errors/appError";
import { OrdersProductsRepository } from "../../repositories/Orders/OrdersProductsRepository";
import { OrdersRepository } from "../../repositories/Orders/OrdersRepository";
import { ProductRepository } from "../../repositories/Product/ProductRepository";

interface OrdersRequest {
  products: Array<Keys>;
}

interface Keys {
  id: string;
  quantity: number;
}

class CreateOrdersService {
  async execute(ordersRequest: OrdersRequest, userId: string) {
    const productRepository = getCustomRepository(ProductRepository);
    const ordersRepository = getCustomRepository(OrdersRepository);
    const ordersProductsRepository = getCustomRepository(
      OrdersProductsRepository
    );

    const { products } = ordersRequest;

    let totalPrice = 0;
    let productList = [];

    products.forEach(async (item) => {
      let product = await productRepository.findOne({ where: { id: item.id } });
      if (product) {
        totalPrice += item.quantity * product.price;
      }

      if (!product) {
        throw new AppError(`ProductId ${item.id} not found`, 404);
      }
    });

    const order = ordersRepository.create({ totalPrice, userId });
    await ordersRepository.save(order);

    products.forEach(async (item) => {
      let product = await productRepository.findOne({ where: { id: item.id } });
      const ordersProducts = ordersProductsRepository.create({
        order: { ordersId: order.ordersId },
        product: { id: item.id },
        unitPrice: product?.price,
        quantity: item.quantity,
      });
      await ordersProductsRepository.save(ordersProducts);
    });

    return order;
  }
}
