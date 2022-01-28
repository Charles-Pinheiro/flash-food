import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().positive().required()
});
