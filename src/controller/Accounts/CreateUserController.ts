import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import CreateUserService from "../../services/User/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserService = new CreateUserService();

    const user = await createUserService.execute(request.body);

    return response.status(201).json(classToClass(user));
  }
}

export default CreateUserController;
