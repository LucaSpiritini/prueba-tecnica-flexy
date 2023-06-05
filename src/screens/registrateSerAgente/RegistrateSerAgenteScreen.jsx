import React from "react";
import "./registrateScreen.css";
import RegisterForm from "../../components/registerForm/RegisterForm";

const RegistrateSerAgenteScreen = () => {
  return (
    <div className="registrate-main-container">

      <div className="children-container">

        <div className="top-navbar">
          <div className="logo"></div>
          <div className="menu">| |</div>
        </div>

        <div className="headline">
          <h3 className="bienvenido">¡Bienvenido!</h3>
          <p className="parrafo">Convertite ahora en un agente Flexy.</p>
        </div>

        <RegisterForm />

      </div>

      <div className="inicia-sesion-agente"></div>
      
    </div>
  );
};

export default RegistrateSerAgenteScreen;
