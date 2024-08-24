import { create } from "zustand";
import { VehicleStore } from "../private/pages/Dashboard/interfaces/vehicle";
import {
  deleteVehicle,
  getVehicles,
  updateVehicle,
} from "../services/vehicles/vehicleService";

const useVehicleStore = create<VehicleStore>((set) => ({
  vehicles: [],
  page: 1,
  limit: 10,
  total: 0,
  pages: 0,
  selectedVehicle: null,
  setVehicles: (vehicles) => set({ vehicles }),
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
  fetchVehicles: async (page: number, limit: number) => {
    try {
      const { data, pagination } = await getVehicles(page, limit);
      set({
        vehicles: data,
        page: pagination.page,
        pages: pagination.pages,
        total: pagination.total,
      });
    } catch (error) {
      console.error("Failed to fetch vehicles:", error);
    }
  },
  addVehicle: (vehicle) =>
    set((state) => ({ vehicles: [...state.vehicles, vehicle] })),
  updateVehicle: async (id, updatedVehicle) => {
    try {
      const vehicle = await updateVehicle(id, updatedVehicle);
      set((state) => ({
        vehicles: state.vehicles.map((v) =>
          v._id === vehicle._id ? vehicle : v
        ),
      }));
    } catch (error) {
      console.error("Failed to update vehicle:", error);
    }
  },
  deleteVehicle: async (id) => {
    try {
      await deleteVehicle(id);
      set((state) => ({
        vehicles: state.vehicles.filter((vehicle) => vehicle._id !== id),
      }));
    } catch (error) {
      console.error("Failed to delete vehicle:", error);
    }
  },
  setPage: (page) => set({ page }),
  setPages: (pages) => set({ pages }),
  setTotal: (total) => set({ total }),
  setLimit: (limit) => set({ limit }),
}));

export default useVehicleStore;
