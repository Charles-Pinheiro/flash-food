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

interface ValueProduct {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export default class CreateOrdersService {
  async execute(ordersRequest: OrdersRequest, userId: string) {
    const productRepository = getCustomRepository(ProductRepository);
    const ordersRepository = getCustomRepository(OrdersRepository);
    const ordersProductsRepository = getCustomRepository(
      OrdersProductsRepository
    );

    const { products } = ordersRequest;

    let totalPrice = 0;
    let productList: Array<ValueProduct> = [];

    for (let p in products) {
      let product = await productRepository.findOne({
        where: { id: products[p].id },
      });

      if (product) {
        productList = [...productList, product];
        totalPrice += products[p].quantity * product.price;
      }

      if (!product) {
        throw new AppError(`ProductId ${products[p].id} not found`, 404);
      }
    }

    const order = ordersRepository.create({
      usersId: userId,
      totalPrice: totalPrice,
    });

    await ordersRepository.save(order);

    products.forEach(async (item) => {
      let product = await productRepository.findOne({ where: { id: item.id } });
      const ordersProducts = ordersProductsRepository.create({
        order: order,
        product: product,
        quantity: item.quantity,
        unitePrice: product?.price,
        orderId: order.ordersId,
        productsId: product?.id

      });
      await ordersProductsRepository.save(ordersProducts);
    });

    return order;
  }
}
