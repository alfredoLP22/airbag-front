import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { schemaValidationLogin } from "../helpers/schemaValidationLogin";
import { InputLogin } from "../../interfaces/user.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Logo from "../../assets/logo-airbag.png";

const FormLogin: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<InputLogin>({
    resolver: yupResolver(schemaValidationLogin),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<InputLogin> = (data) => {
    console.log(data);
    navigate("/admin");
  };

  return (
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
        <label htmlFor="email" className="p-1 dark:text-concrete-100">
          Correo
        </label>
        <input
          type="email"
          placeholder="Ej: correo@correo.com"
          id="email"
          {...register("email")}
          className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
            errors.email ? "border-roman-500" : "border-viridian-green-200"
          }`}
        />
        {errors.email && (
          <div className="text-roman-500 text-sm">{errors?.email.message}</div>
        )}
      </div>
      <div className="flex flex-col w-4/6">
        <label htmlFor="password" className="p-1 dark:text-concrete-100">
          Contraseña
        </label>
        <input
          type={isVisible ? "text" : "password"}
          placeholder="********"
          id="password"
          {...register("password")}
          className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
            errors.email ? "border-roman-500" : "border-viridian-green-200"
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
          <span className="dark:text-concrete-100">
            Mostrar contraseña
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="mt-4 p-2 w-4/6  bg-cod-gray-950 hover:bg-cod-gray-900 rounded-sm text-concrete-50 flex items-center justify-center gap-1 disabled:bg-cod-gray-800 cursor-pointer"
      >
        Iniciar sesion
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
  );
};

export default FormLogin;
