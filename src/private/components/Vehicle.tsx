import { Link } from "react-router-dom";

const Vehicle = () => {
  return (
    <div className="w-56 flex flex-col flex-wrap items-center justify-center rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 hover:opacity-90">
      <div className="text-viridian-green-100 p-6 w-full bg-viridian-green-500 dark:bg-viridian-green-600 text-2xl rounded-t-md flex flex-wrap gap-3 items-center">
        <div className="rounded-full p-3 bg-viridian-green-50 text-viridian-green-500 dark:bg-rock-blue-950 dark:text-viridian-green-50">
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
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
        </div>
        <p className="font-semibold">
          Vehiculo: <span className="font-light">valle oriental</span>
        </p>
      </div>
      <div className="bg-viridian-green-50 dark:bg-rock-blue-950 w-full p-4 flex justify-center">
        <Link
          to="/"
          className="p-2 hover:bg-viridian-green-100 text-viridian-green-400 flex items-center gap-2 rounded-sm border border-viridian-green-400 dark:bg-viridian-green-600 dark:text-viridian-green-50"
        >
          Ver detalles
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
        </Link>
      </div>
    </div>
  );
};

export default Vehicle;
