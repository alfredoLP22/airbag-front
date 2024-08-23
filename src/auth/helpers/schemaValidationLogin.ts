import * as yup from "yup";

export const schemaValidationLogin = yup
  .object({
    username: yup
      .string()
      .required("El username es un valor requerido")
      .trim(),
    password: yup
      .string()
      .required("La contraseña es necesaria")
      .trim()
  })
  .required();
