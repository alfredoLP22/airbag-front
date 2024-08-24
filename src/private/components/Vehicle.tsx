import { useState } from "react";
import { InputsVehicle } from "../pages/Dashboard/interfaces/vehicle";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

interface VehicleProps extends InputsVehicle {
  onClick: () => void;
  onDelete: (id: string) => void;
  onEdit: () => void;
}

const Vehicle: React.FC<VehicleProps> = (props) => {
  const { _id, vehicleName, plate, brand, price, onClick, onDelete, onEdit } = props;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleDeleteConfirm = () => {
    onDelete(_id!);
    closeDeleteModal();
  };

  return (
    <>
      <div className="w-80 flex flex-wrap items-center justify-center rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 bg-concrete-100">
        <div className="p-3 w-full text-2xl rounded-t-md flex  gap-3 items-center">
          <div className="rounded-full p-3 bg-cod-gray-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gold-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold">
              Vehicle: <span className="font-light">{vehicleName}</span>
            </p>
            <p className="text-concrete-700 text-lg font-semibold">
              Plate: <span className="font-light">{plate}</span>
            </p>
            <p className="text-concrete-700 text-lg font-semibold">
              Brand: <span className="font-light">{brand}</span>
            </p>
            <p className="text-concrete-700 text-lg font-semibold">
              Price: <span className="text-emerald-600">${price}</span>
            </p>
          </div>
        </div>
        <div className="bg-concrete-200 w-full p-2 gap-2 flex justify-center">
          <button
            onClick={onClick}
            className="p-2 hover:bg-gold-400 bg-gold-500 cursor-pointer text-cod-gray-950 flex items-center gap-2 rounded-sm border border-gold-500"
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
          <button
            onClick={onEdit}
            className="p-2 hover:bg-concrete-950 bg-cod-gray-950 cursor-pointer text-concrete-100 flex items-center gap-2 rounded-sm border"
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button
            className="p-2 flex items-center gap-2 rounded-sm border"
            onClick={openDeleteModal}
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        close={closeDeleteModal}
        onConfirm={handleDeleteConfirm}
        vehicleName={vehicleName}
      />
    </>
  );
};

export default Vehicle;
