import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  isPartner: yup.bool().required(),
  street: yup.string().required(),
  district: yup.string().required(),
  number: yup.number().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  cep: yup.string().required(),
});
