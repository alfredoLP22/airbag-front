import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../common/components/Sidebar";
import Header from "../common/components/Header";
import useUserStore from "../../store/useUserStore";
import { useEffect } from "react";

const RouteProtected = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const token = user?.token || localStorage.getItem("token");

    if (!token) {
      navigate("/");
    } else if (!user) {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      if (storedUser && storedUser.token) {
        setUser(storedUser);
      }
    }
  }, [user, navigate, setUser]);

  return (
    <>
      <div className="md:flex flex min-h-screen h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-scroll">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RouteProtected;
