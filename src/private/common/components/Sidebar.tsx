import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../../../assets/logo-airbag.png";

const Sidebar = () => {
  const [close, setIsClose] = useState(false);
  const toggleMenu = () => {
    setIsClose(!close);
  };

  return (
    <aside
      className={`flex flex-col gap-10 h-screen px-5 py-10 bg-concrete-100 transition-all duration-300 shadow-lg ${
        close ? "w-20" : "md:w-1/3 lg:w-1/5 xl:w-1/6"
      }`}
    >
      <div className="flex justify-between items-center">
        {!close && (
          <figure>
            <img
              src={LogoImg}
              alt="logo"
              className="w-15 h-14 rounded-full"
              loading="lazy"
            />
          </figure>
        )}
        <button
          onClick={toggleMenu}
          className="text-cod-gray-950 hover:text-cod-gray-900"
        >
          {close ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon-size"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon-size"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-col">
        {!close && (
          <p className="p-2 font-bold text-xl text-cod-gray-950">
            Administracion
          </p>
        )}
        <NavLink
          to=""
          className="flex items-center gap-2 hover:bg-cod-gray-900 hover:text-concrete-100 text-cod-gray-950 p-3 rounded-sm"
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
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
            />
          </svg>
          {!close && <span>Vehiculos</span>}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
