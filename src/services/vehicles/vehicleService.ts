import axios from "axios";
import api from "../api";
import { ErrorResponse } from "../../interfaces/response.interface";
import { InputsVehicle } from "../../private/pages/Dashboard/interfaces/vehicle";

const token = localStorage.getItem("token");

export const createVehicle = async (vehicle: InputsVehicle) => {
  try {
    const response = await api.post("/vehicle", vehicle, {
      headers: {
        "x-api-token": token,
      },
    });

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
export const getVehicles = async (page: number, limit: number) => {
  try {
    const response = await api.get(`/vehicle?page=${page}&limit=${limit}`, {
      headers: {
        "x-api-token": token,
      },
    });

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

export const updateVehicle = async (id: string, vehicle: InputsVehicle) => {
  try {
    const response = await api.put(`/vehicle/${id}`, vehicle, {
      headers: {
        "x-api-token": token,
      },
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const errResponse = error.response.data as ErrorResponse;

      throw new Error(errResponse.errors[0]?.msg || "Error during register");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const deleteVehicle = async (id: string) => {
  try {
    const response = await api.delete(`/vehicle/${id}`, {
      headers: {
        "x-api-token": token,
      },
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const errResponse = error.response.data as ErrorResponse;

      throw new Error(errResponse.errors[0]?.msg || "Error during register");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
