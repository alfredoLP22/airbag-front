import * as yup from "yup";

export const schemaValidationLogin = yup
  .object({
    email: yup
      .string()
      .required("El correo es un valor requerido")
      .email("No es un correo valido")
      .trim(),
    password: yup
      .string()
      .required("La contraseña es necesaria")
      .trim()
  })
  .required();
