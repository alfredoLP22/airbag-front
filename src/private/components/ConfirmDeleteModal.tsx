import React from "react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  close: () => void;
  onConfirm: () => void;
  vehicleName: string;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  close,
  onConfirm,
  vehicleName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="bg-concrete-100 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Confirm Delete</h2>
        <p>Are you sure you want to delete the vehicle "{vehicleName}"?</p>
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={onConfirm}
            className="bg-cod-gray-950 hover:bg-oslo-gray-950 text-concrete-100 px-4 py-2 rounded"
          >
            Yes, Delete
          </button>
          <button
            onClick={close}
            className="text-cod-gray-950 hover:text-oslo-gray-950 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
