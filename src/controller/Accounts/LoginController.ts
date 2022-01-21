import { Request, Response } from "express";
import LoginService from "../../services/User/LoginService";

class LoginController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginService = new LoginService();

    const loginResponse = await loginService.execute({ email, password });

    return response.status(200).json(loginResponse);
  }
}

export default LoginController;
