import { useState } from "react";
import TitleSection from "../../../common/components/TitleSection";
import Vehicle from "../../../components/Vehicle";
import AddVehicle from "../components/AddVehicle";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenVisible, setIsOpenVisible] = useState(false);

  const openInviteResident = () => {
    setIsOpenVisible(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 10);
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
          <TitleSection title="Vehiculos" />
        </div>
        <button
          onClick={() => openInviteResident()}
          className="p-2 bg-cod-gray-950 hover:bg-cod-gray-900 text-concrete-100 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1"
        >
          Agregar vehiculo
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
        <Vehicle />
        <Vehicle />
        <Vehicle />
        <Vehicle />
        <Vehicle />
        <Vehicle />
        <Vehicle />
        <Vehicle />
        <Vehicle />
      </div>
      {isOpenVisible && (
        <AddVehicle
          close={close}
          isOpen={isOpen}
        />
      )}
    </section>
  );
};

export default Dashboard;
