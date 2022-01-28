import { TomTom } from "tomtom-lib";
import { getRepository } from "typeorm";
import Address from "../../models/Address";
import { AddressRepository } from "../../repositories/AddressRepository";

type DeepPartial<Address> = {
  [P in keyof Address]?: DeepPartial<Address[P]>;
};

export interface AddressRequest extends DeepPartial<AddressRepository> {
  street: string;
  district: string;
  number: number;
  city: string;
  state: string;
  cep: string;
}

interface Coordinates {
  coordinates: string;
}

class CreateAddressService {
  
  async execute(dataAddress: AddressRequest) {
    const addressRepository = getRepository(Address);
    const tomtomKey: string = process.env.TOMTOM_KEY!;

    const tomtom = new TomTom(tomtomKey);

    let responseCoordinate = await tomtom.geocoding(dataAddress);

    if (typeof responseCoordinate !== "string") {
      responseCoordinate = responseCoordinate.coordinates;
    }
    const addressData = {
      ...dataAddress,
      coordinate: responseCoordinate,
    };

    const address = addressRepository.create(addressData);

    await addressRepository.save(address);

    return address;
  }
}

export default CreateAddressService;
