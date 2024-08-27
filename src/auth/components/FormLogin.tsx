import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { schemaValidationLogin } from "../helpers/schemaValidationLogin";
import { InputLogin } from "../../interfaces/user.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Logo from "../../assets/logo-airbag.png";
import { login } from "../../services/auth/authService";
import toast, { Toaster } from "react-hot-toast";
import useUserStore from "../../store/useUserStore";
import Label from "../../components/Label";
import Input from "../../components/Input";

const FormLogin: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<InputLogin>({
    resolver: yupResolver(schemaValidationLogin),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<InputLogin> = async (data) => {
    try {
      const response = await login(data);
      if (response.data && response.data.user && response.data.token) {
        setUser({
          ...response.data.user,
          token: response.data.token,
        });

        toast.success("Login successfully");

        setTimeout(() => {
          navigate("/admin");
        }, 1000);
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
          <Label htmlFor="username" text="Username" />
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
          <Label htmlFor="password" text="Password" />
          <Input
            type={isVisible ? "text" : "password"}
            placeholder="************"
            id="password"
            {...register("password")}
            className={`w-100 p-2 outline-gray-300 rounded-sm outline-none focus:outline-cod-gray-700 border ${
              errors.username ? "border-roman-500" : "border-viridian-green-200"
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
          <Link to={"crear-cuenta"} className="hover:underline text-gold-500">
            Create account
          </Link>
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="mt-4 p-2 w-4/6  bg-cod-gray-950 hover:bg-cod-gray-900 rounded-sm text-concrete-50 flex items-center justify-center gap-1 disabled:bg-cod-gray-800 cursor-pointer"
        >
          {isSubmitting ? "Please wait..." : "Login"}
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

export default FormLogin;
