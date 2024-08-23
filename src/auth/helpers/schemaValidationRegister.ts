import * as yup from "yup";

export const schemaValidationRegister = yup.object().shape({
  username: yup.string().required("El nombre de usuario es obligatorio"),
  email: yup
    .string()
    .email("El correo debe ser válido")
    .required("El correo es obligatorio"),
  firstName: yup.string().required("El nombre es obligatorio"),
  lastName: yup.string().required("El apellido es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});
