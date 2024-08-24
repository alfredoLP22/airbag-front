import { useEffect, useState } from "react";
import TitleSection from "../../../common/components/TitleSection";
import Vehicle from "../../../components/Vehicle";
import AddVehicle from "../components/AddVehicle";
import useVehicleStore from "../../../../store/useVehicleStore";
import { InputsVehicle } from "../interfaces/vehicle";
import VehicleModal from "../../../components/VehicleModal";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenVisible, setIsOpenVisible] = useState(false);

  const vehicles = useVehicleStore((state) => state.vehicles);
  const page = useVehicleStore((state) => state.page);
  const pages = useVehicleStore((state) => state.pages);
  const setPage = useVehicleStore((state) => state.setPage);
  const selectedVehicle = useVehicleStore((state) => state.selectedVehicle);
  const setSelectedVehicle = useVehicleStore(
    (state) => state.setSelectedVehicle
  );
  const fetchVehicles = useVehicleStore((state) => state.fetchVehicles);
  const deleteVehicle = useVehicleStore((state) => state.deleteVehicle);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchVehicles(page, 5);
    } else {
      console.error("Token is not available.");
    }
  }, [fetchVehicles, page]);

  const openCreateVehicle = () => {
    setSelectedVehicle(null);
    setIsOpenVisible(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 10);
  };

  const handleDelete = (id: string) => {
    deleteVehicle(id);
  };

  const handleVehicleClick = (vehicle: InputsVehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleEditClick = (vehicle: InputsVehicle) => {
    setSelectedVehicle(vehicle);
    setIsOpenVisible(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 10);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchVehicles(newPage, 5);
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsOpenVisible(false);
    }, 300);
  };

  return (
    <section className="w-10/12 mx-auto mt-5 flex flex-col flex-wrap gap-7 py-2 px-0 overflow-x-hidden">
      <div className="p-2 flex flex-col md:flex-row items-start md:items-center gap-2 justify-between w-12/12">
        <div className="flex items-center gap-2">
          <TitleSection title="Vehicles" />
        </div>
        <button
          onClick={() => {
            openCreateVehicle();
          }}
          className="p-2 bg-cod-gray-950 hover:bg-cod-gray-900 text-concrete-100 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1"
        >
          Add vehicle
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="w-12/12 mt-5 flex flex-col md:flex-row flex-wrap gap-7 py-2 px-0 overflow-x-hidden">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <Vehicle
              key={vehicle._id}
              {...vehicle}
              onClick={() => handleVehicleClick(vehicle)}
              onDelete={handleDelete}
              onEdit={() => handleEditClick(vehicle)}
            />
          ))
        ) : (
          <p>No vehicles available</p>
        )}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="p-2 bg-cod-gray-950 hover:bg-cod-gray-900 text-concrete-100 rounded-sm"
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
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <span className="mx-4">{`Page ${page} of ${pages}`}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === pages}
          className="p-2 bg-cod-gray-950 hover:bg-cod-gray-900 text-concrete-100 rounded-sm"
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
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
      {isOpenVisible && (
        <AddVehicle close={close} isOpen={isOpen} vehicle={selectedVehicle} />
      )}
      <VehicleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicle={selectedVehicle}
      />
    </section>
  );
};

export default Dashboard;
