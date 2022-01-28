import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { OrdersRepository } from "../../repositories/Orders/OrdersRepository";

export default class ListOrderService {
    async execute(request: Request) {
        const ordersRepository = getCustomRepository(OrdersRepository);

        const orders = await ordersRepository.find({
            where: {
                usersId: request.user.id,
            }
        });

        return orders;
    };
};
