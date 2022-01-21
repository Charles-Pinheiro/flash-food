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
    const tomtom = new TomTom("PSAvTwD8gEzcTOVHomChaD93ZMiMkgIa");

    let ResponseCoordinate = await tomtom.geocoding(dataAddress);

    if (typeof ResponseCoordinate !== "string") {
      ResponseCoordinate = ResponseCoordinate.coordinates;
    }
    const addressData = {
      ...dataAddress,
      coordinate: ResponseCoordinate,
    };

    const address = addressRepository.create(addressData);

    await addressRepository.save(address);

    return address;
  }
}

export default CreateAddressService;
