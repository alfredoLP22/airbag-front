import * as yup from "yup";

export const schemaValidationLogin = yup
  .object({
    username: yup.string().required("The username is a required field").trim(),
    password: yup.string().required("The password is required").trim(),
  })
  .required();
