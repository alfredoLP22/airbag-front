import * as yup from "yup";

export const schemaVehicle = yup
  .object({
    vehicleName: yup
      .string()
      .required("El nombre del vehículo es un valor requerido")
      .trim()
      .min(3, "El nombre del vehículo debe tener al menos 3 caracteres")
      .max(50, "El nombre del vehículo no puede tener más de 50 caracteres"),
    plate: yup
      .string()
      .required("La placa del vehículo es un valor requerido")
      .trim()
      .min(3, "La placa del vehículo debe tener al menos 3 caracteres")
      .max(7, "La placa del vehículo no puede tener más de 7 caracteres"),
    brand: yup
      .string()
      .required("La marca del vehículo es un valor requerido")
      .trim()
      .min(6, "La marca del vehículo debe tener al menos 6 caracteres")
      .max(50, "La marca del vehículo no puede tener más de 50 caracteres"),
    price: yup
      .number()
      .required("El precio del vehículo es un valor requerido")
      .typeError("El precio debe ser un número"),
    description: yup
      .string()
      .max(50, "La descripción no puede tener más de 50 caracteres")
      .trim(),
  })
  .required();
