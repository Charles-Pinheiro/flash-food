import * as yup from "yup";

export const storeSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  street: yup.string().required(),
  district: yup.string().required(),
  number: yup.number().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  cep: yup.string().required(),
});
