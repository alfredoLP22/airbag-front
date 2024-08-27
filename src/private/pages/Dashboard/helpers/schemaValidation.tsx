import * as yup from "yup";

export const schemaVehicle = yup
  .object({
    vehicleName: yup
      .string()
      .required("The vehicle name is a required field")
      .trim()
      .min(3, "The vehicle name must be at least 3 characters")
      .max(50, "The vehicle name cannot be more than 50 characters"),
    plate: yup
      .string()
      .required("The vehicle plate is a required field")
      .trim()
      .min(3, "The vehicle plate must be at least 3 characters")
      .max(7, "The vehicle plate cannot be more than 7 characters"),
    brand: yup
      .string()
      .required("The vehicle brand is a required field")
      .trim()
      .min(2, "The vehicle brand must be at least 2 characters")
      .max(50, "The vehicle brand cannot be more than 50 characters"),
    price: yup
      .number()
      .required("The vehicle price is a required field")
      .typeError("The price must be a number"),
    description: yup
      .string()
      .max(50, "The description cannot be more than 50 characters")
      .trim(),
  })
  .required();
