import React from "react";
import "./registrateScreen.css";
import RegisterForm from "../../components/registerForm/RegisterForm";
import Image from "../../components/imageRegistrateSerAgente/Image";

const RegistrateSerAgenteScreen = () => {
  return (
    <div className="registrate-main-container">
      <RegisterForm />
      <Image />
    </div>
  );
};

export default RegistrateSerAgenteScreen;
