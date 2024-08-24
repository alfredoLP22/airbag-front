import React from "react";
import { InputsVehicle } from "../pages/Dashboard/interfaces/vehicle";

interface VehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: InputsVehicle | null;
}

const VehicleModal: React.FC<VehicleModalProps> = ({
  isOpen,
  onClose,
  vehicle,
}) => {
  if (!isOpen || !vehicle) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50bg-opacity-70">
      <div className="bg-concrete-100  p-6 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Vehicle Details</h2>
          <button
            onClick={onClose}
            className="text-cod-gray-950 hover:text-oslo-gray-950 px-4 py-2 rounded"
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p>
          <strong>Vehicle:</strong> {vehicle.vehicleName}
        </p>
        <p>
          <strong>Plate:</strong> {vehicle.plate}
        </p>
        <p>
          <strong>Brand:</strong> {vehicle.brand}
        </p>
        <p>
          <strong>Price:</strong> ${vehicle.price}
        </p>
        <p>
          <strong>Description:</strong> {vehicle.description}
        </p>
      </div>
    </div>
  );
};

export default VehicleModal;
