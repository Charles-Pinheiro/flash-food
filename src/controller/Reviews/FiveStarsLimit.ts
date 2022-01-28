import * as yup from "yup";

export const fiveLimitSchema = yup.object().shape({
    stars: yup.number().required().max(5),
    review: yup.string().required() 
});