import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../../store/useUserStore";
import { getInitials } from "../../pages/Dashboard/helpers/getInitials";

const Logout = () => {
  const navigate = useNavigate();
  const clearUser = useUserStore((state) => state.clearUser);
  const user = useUserStore((state) => state.user);

  const logOut = () => {
    clearUser();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center px-7 gap-2 dark:bg-rock-blue-950">
      <Avatar className="bg-cod-gray-800 text-concrete-50 w-20 h-20 ring-2 ring-cod-gray-950">
        <span className="text-2xl font-bold">
          {user?.firstName && user?.lastName
            ? getInitials(user.firstName, user.lastName)
            : "?"}
        </span>
      </Avatar>
      <div className="text-center">
        <p className="text-viridian-green-600 font-semibold dark:text-viridian-green-400">
          {user?.firstName} {user?.lastName}
        </p>
        <span className="text-viridian-green-400 font-medium">{user?.username}</span>
        <p className="opacity-80 dark:text-viridian-green-400">
          {user?.email}
        </p>
      </div>
      <button
        className="bg-cod-gray-950 hover:bg-cod-gray-900 px-4 py-2 rounded-sm text-concrete-50 flex gap-1"
        onClick={() => logOut()}
      >
        Logout
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
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      </button>
    </div>
  );
};

export default Logout;
