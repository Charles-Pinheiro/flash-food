import { Request, Response } from "express";
import CreateOrdersService from "../../services/Order/CreateOrderService";

class CreateOrdersController {
  async handle(request: Request, response: Response) {
    const createOrdersService = new CreateOrdersService();
    const order = await createOrdersService.execute(
      request.body,
      request.user.id
    );

    return response.status(201).json(order);
  }
}

export default CreateOrdersController;
