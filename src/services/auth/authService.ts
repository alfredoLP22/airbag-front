import axios from "axios";
import { InputLogin } from "../../interfaces/user.interface";
import api from "../api";
import { ErrorResponse } from "../../interfaces/response.interface";

export const login = async (credentials: InputLogin) => {
  try {
    const response = await api.post("/auth/login", credentials);

    if (response.data.data.token) {
      localStorage.setItem("token", response.data.data.token);
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const errResponse = error.response.data as ErrorResponse;

      throw new Error(errResponse.errors[0]?.msg || "Error during login");
    } else {
      console.error("An unknown error occurred");
      throw new Error("An unknown error occurred");
    }
  }
};

export const registerUser = async (credentials: InputLogin) => {
  try {
    const response = await api.post("/auth/register", credentials);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const errResponse = error.response.data as ErrorResponse;

      throw new Error(errResponse.errors[0]?.msg || "Error during register");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
