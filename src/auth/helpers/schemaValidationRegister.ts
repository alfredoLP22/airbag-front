import * as yup from "yup";

export const schemaValidationRegister = yup.object().shape({
  username: yup.string().required("The username is required"),
  email: yup
    .string()
    .email("The email must be valid")
    .required("The email is required"),
  firstName: yup.string().required("The first name is required"),
  lastName: yup.string().required("The last name is required"),
  password: yup
    .string()
    .min(6, "The password must be at least 6 characters long")
    .required("The password is required"),
});
