import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import AuthConfig from "../../config/auth";
import AppError from "../../errors/appError";
import { UserRepository } from "../../repositories/UserReposytory";

interface LoginRequest {
  email: string;
  password: string;
}

interface Response {
  token: string;
}

export default class LoginService {
  public async execute({ email, password }: LoginRequest): Promise<Response> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new AppError("Wrong email/password", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Wrong email/password", 401);
    }

    const { expiresIn, secret } = AuthConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { token };
  }
}
