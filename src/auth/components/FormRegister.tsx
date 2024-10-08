import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputRegister } from "../../interfaces/user.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Logo from "../../assets/logo-airbag.png";
import toast, { Toaster } from "react-hot-toast";
import { schemaValidationRegister } from "../helpers/schemaValidationRegister";
import { registerUser } from "../../services/auth/authService";
import Label from "../../components/Label";
import Input from "../../components/Input";

const FormRegister: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<InputRegister>({
    resolver: yupResolver(schemaValidationRegister),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<InputRegister> = async (data) => {
    try {
      const response = await registerUser(data);
      if (response.data !== null) {
        toast.success("User was created successfully");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        throw new Error("Invalid login response");
      }
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
      console.error(errorMessage);
    }
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:w-2/3 h-2/3 items-center justify-center mt-[9rem] mx-auto gap-4"
      >
        <div className="dark:text-concrete-100">
          <figure>
            <img src={Logo} alt="Logo" loading="lazy" />
          </figure>
        </div>
        <div className="flex flex-col w-4/6">
          <Label htmlFor="username" text="Username" isRequired={true} />
          <Input
            type="text"
            placeholder="Ej: username01"
            id="username"
            {...register("username")}
            className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
              errors.username ? "border-roman-500" : "border-viridian-green-200"
            }`}
          />
          {errors.username && (
            <div className="text-roman-500 text-sm">
              {errors?.username.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-4/6">
          <Label text="Email" htmlFor="email" isRequired={true} />
          <Input
            type="email"
            placeholder="Ej: correo@correo.com"
            id="email"
            {...register("email")}
            className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
              errors.email ? "border-roman-500" : "border-viridian-green-200"
            }`}
          />
          {errors.email && (
            <div className="text-roman-500 text-sm">
              {errors?.email.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-4/6">
          <Label text="First name" htmlFor="firstName" isRequired={true} />
          <Input
            type="text"
            placeholder="Ej: John"
            id="firstName"
            {...register("firstName")}
            className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
              errors.email ? "border-roman-500" : "border-viridian-green-200"
            }`}
          />
          {errors.firstName && (
            <div className="text-roman-500 text-sm">
              {errors?.firstName.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-4/6">
          <Label text="Last name" htmlFor="lastName" isRequired={true} />
          <Input
            type="text"
            placeholder="Ej: Doe"
            id="lastName"
            {...register("lastName")}
            className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
              errors.email ? "border-roman-500" : "border-viridian-green-200"
            }`}
          />
          {errors.lastName && (
            <div className="text-roman-500 text-sm">
              {errors?.lastName.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-4/6">
          <Label text="Password" htmlFor="password" isRequired={true} />
          <Input
            type={isVisible ? "text" : "password"}
            id="password"
            placeholder="***********"
            {...register("password")}
            className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
              errors.password ? "border-roman-500" : "border-viridian-green-200"
            }`}
          />
          {errors.password && (
            <div className="text-roman-500 text-sm">
              {errors?.password.message}
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row w-4/6 gap-2 items-center">
          <div className="flex w-4/6 gap-2">
            <label className="switch">
              <input
                type="checkbox"
                className="cursor-pointer"
                onClick={() => setIsVisible(!isVisible)}
              />
              <span className="slider"></span>
            </label>
            <span className="dark:text-concrete-100">Show password</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="mt-4 p-2 w-4/6 bg-cod-gray-950 hover:bg-cod-gray-900 rounded-sm text-concrete-50 flex items-center justify-center gap-1 disabled:bg-cod-gray-800 cursor-pointer"
        >
          {isSubmitting ? "Creating account..." : "Create account"}
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
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </button>
      </form>
    </>
  );
};

export default FormRegister;
