import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserReposytory";
import CreateAddressService from "../Address/CreateAddress";

interface UserRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  isPartner: boolean;

  street: string;
  district: string;
  number: number;
  city: string;
  state: string;
  cep: string;
}

class CreateUserService {
  async execute({
    username,
    password,
    email,
    firstName,
    lastName,
    isPartner,
    street,
    district,
    number,
    city,
    state,
    cep,
  }: UserRequest) {
    const addressData = { street, district, number, city, state, cep };
    const createAddressService = new CreateAddressService();
    const address = await createAddressService.execute(addressData);

    const userRepository = getCustomRepository(UserRepository);

    const hashedPassword = await hash(password, 8);
    const user = userRepository.create({
      username,
      password: hashedPassword,
      email,
      firstName,
      lastName,
      isPartner,
      address: address,
    });

    await userRepository.save(user);

    return user;
  }
}
