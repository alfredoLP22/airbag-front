import React from "react";
import "../styles/login.css";
import FormRegister from "../components/FormRegister";

const Register: React.FC = () => {
  return (
    <div className="container-login flex-col md:flex-row">
      <div className="md:w-4/4 w-100-vw lg:w-[100vw] h-screen dark:bg-rock-blue-950">
        <FormRegister />
      </div>
    </div>
  );
};

export default Register;
