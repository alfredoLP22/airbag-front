import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputsVehicle } from "../interfaces/vehicle";
import { schemaVehicle } from "../helpers/schemaValidation";
import TitleSection from "../../../common/components/TitleSection";
import useVehicleStore from "../../../../store/useVehicleStore";
import { createVehicle } from "../../../../services/vehicles/vehicleService";
import toast, { Toaster } from "react-hot-toast";
import Select from "../../../../components/Select";
import { brands } from "../../../../services/vehicles/data";
import Label from "../../../../components/Label";
import Input from "../../../../components/Input";

const AddVehicle: React.FC<{
  close: () => void;
  isOpen: boolean;
  vehicle: InputsVehicle | null;
}> = ({ close, isOpen, vehicle }) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<InputsVehicle>({
    resolver: yupResolver(schemaVehicle),
    mode: "onBlur",
  });

  const addVehicle = useVehicleStore((state) => state.addVehicle);
  const updateVehicleInStore = useVehicleStore((state) => state.updateVehicle);

  useEffect(() => {
    if (vehicle) {
      Object.keys(vehicle).forEach((key) => {
        setValue(
          key as keyof InputsVehicle,
          vehicle[key as keyof InputsVehicle] || ""
        );
      });
    } else {
      reset();
    }
  }, [vehicle, setValue, reset]);

  const onSubmit: SubmitHandler<InputsVehicle> = async (data) => {
    try {
      if (vehicle?._id) {
        await updateVehicleInStore(vehicle._id, data);
        toast.success("The vehicle was updated successfully");
      } else {
        const response = await createVehicle(data);
        if (response.data) {
          addVehicle(response.data);
          toast.success("The vehicle was created successfully");
        }
      }
      reset();
      setTimeout(() => {
        close();
      }, 3000);
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      } else {
        console.error("Error type not recognized:", error);
      }
      toast.error(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 z-40">
      <div
        className={`fixed inset-0 bg-rock-blue-950 transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={close}
      ></div>

      <div
        className={`bg-concrete-100 fixed top-0 right-0 z-50 w-[100vw] md:w-[50vw] h-screen transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <button
          onClick={close}
          className="absolute top-3 right-5 p-1 bg-gold-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Toaster />
        <form
          className="w-9/12 mx-auto mt-5 py-4 px-2 overflow-x-hidden"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center gap-2">
            <TitleSection
              title={vehicle?._id ? "Save vehicle" : "Add vehicle"}
            />
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <Label
                htmlFor="vehicleName"
                text="Name of vehicle"
                isRequired={true}
              />
              <Input
                type="text"
                id="vehicleName"
                placeholder="Toyota Corolla"
                {...register("vehicleName")}
                value={watch("vehicleName") || ""}
                onChange={(e) => setValue("vehicleName", e.target.value)}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
                  errors.vehicleName
                    ? "border-roman-500"
                    : "border-cod-gray-400"
                }`}
              />
              {errors.vehicleName && (
                <div className="text-roman-500 text-sm">
                  {errors?.vehicleName.message}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <Label htmlFor="plate" text="Plate" isRequired={true} />
              <Input
                type="text"
                id="plate"
                placeholder="ABC123"
                {...register("plate")}
                value={watch("plate") || ""}
                onChange={(e) => setValue("plate", e.target.value)}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
                  errors.plate ? "border-roman-500" : "border-cod-gray-400"
                }`}
              />
              {errors.plate && (
                <div className="text-roman-500 text-sm">
                  {errors?.plate.message}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <Label text="Brand" htmlFor="brand" isRequired={true} />
              <Controller
                control={control}
                name="brand"
                render={({ field }) => (
                  <Select<InputsVehicle>
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    options={brands}
                    className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
                      errors.brand ? "border-roman-500" : "border-cod-gray-400"
                    }`}
                  />
                )}
              />
              {errors.brand && (
                <div className="text-roman-500 text-sm">
                  {errors?.brand.message}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <Label text="Price" htmlFor="price" isRequired={true} />
              <Input
                type="number"
                id="price"
                placeholder="25000"
                {...register("price")}
                value={watch("price") || ""}
                onChange={(e) => setValue("price", Number(e.target.value))}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
                  errors.plate ? "border-roman-500" : "border-cod-gray-400"
                }`}
              />
              {errors.price && (
                <div className="text-roman-500 text-sm">
                  {errors?.price.message}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="description"
                isRequired={false}
                text="Description"
              />
              <textarea
                id="description"
                placeholder="Descripción opcional"
                {...register("description")}
                className={`w-full p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
                  errors.description
                    ? "border-roman-500"
                    : "border-cod-gray-400"
                }`}
              />
              {errors.description && (
                <div className="text-roman-500 text-sm">
                  {errors?.description.message}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="mt-4 mx-auto p-2 w-4/6 bg-cod-gray-950 hover:bg-cod-gray-900 rounded-sm text-concrete-100 flex items-center justify-center gap-1 disabled:opacity-50 disabled:hover:bg-cod-gray-800 cursor-pointer"
          >
            {vehicle?._id ? "Save vehicle" : "Add vehicle"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
