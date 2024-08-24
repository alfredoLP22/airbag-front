export type InputsVehicle = {
  _id?: string;
  vehicleName: string;
  plate: string;
  brand: string;
  price: number;
  description?: string;
  page?: number;
  limit?: number;
};

export interface VehicleStore {
  vehicles: InputsVehicle[];
  page: number,
  limit: number,
  total: number,
  pages: number,
  selectedVehicle: InputsVehicle | null;
  setVehicles: (vehicles: InputsVehicle[]) => void;
  setSelectedVehicle: (vehicle: InputsVehicle | null) => void;
  fetchVehicles: (page: number, limit: number) => Promise<void>;
  addVehicle: (vehicle: InputsVehicle) => void;
  updateVehicle: (id: string,vehicle: InputsVehicle) => Promise<void>;
  deleteVehicle: (id: string) => void;
  setPage: (page: number) => void;
  setPages: (pages: number) => void;
  setTotal: (total: number) => void;
  setLimit: (limit: number) => void;
}
