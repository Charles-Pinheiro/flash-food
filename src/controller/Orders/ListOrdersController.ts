import { Request, Response } from "express";
import ListOrderService from "../../services/Order/ListOrderService";

class ListOrdersController {
  async handle(request: Request, response: Response) {
    const listOrdersService = new ListOrderService()
    const order = await listOrdersService.execute(
      request
    );

    return response.status(200).json(order);
  }
}

export default ListOrdersController;
