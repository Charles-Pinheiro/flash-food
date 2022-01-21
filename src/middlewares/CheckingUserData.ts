import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/appError";
import { UserRepository } from "../repositories/UserReposytory";

export default async function checkingUserData(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const userRepository = getCustomRepository(UserRepository);

  const email = await userRepository.findOne({
    where: { email: request.body.email },
  });

  const username = await userRepository.findOne({
    where: { username: request.body.username },
  });

  if (email) {
    throw new AppError("E-mail already registered");
  }

  if (username) {
    throw new AppError("Username already registered");
  }
  next();
}
