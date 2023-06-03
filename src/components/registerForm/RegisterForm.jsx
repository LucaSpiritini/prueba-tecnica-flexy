import React, { useState } from "react";
import "./registerForm.css";
import Validation from "./Validation";

const RegisterForm = () => {
  const [values, setValues] = useState({
    image: "",
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className="register-container">
      <div className="top-navbar">
        <div className="logo"></div>
      </div>

      <div className="form-container">
        <div className="titulos">
          <h3 className="bienvenido">¡Bienvenido!</h3>
          <p className="parrafo">Convertite ahora en un agente Flexy.</p>
        </div>

        <div className="form">
          {/* <div className="subi-tu-foto">
            <div className="icono"></div>
            <p className="parrafo-dos">
              Subí tu foto de perfil
            </p>
          </div> */}

          <form onSubmit={handleValidation}>
            <div className="form-input-div">
              <input
                type="file"
                placeholder=""
                name="image"
                className=""
                onChange={handleInput}
              />
              {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
            </div>
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                name="name"
                className="form-input"
                onChange={handleInput}
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div className="form-input-div">
              <input
                type="text"
                placeholder="+54 01 0200 000"
                name="phone"
                className="form-input"
                onChange={handleInput}
              />
              {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
            </div>
            <div className="form-input-div">
              <input
                type="email"
                placeholder="hola@tuemail.com"
                name="email"
                className="form-input"
                onChange={handleInput}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className="form-input-div">
              <input
                type="password"
                placeholder="Ingresá tu contraseña"
                name="password"
                className="form-input"
                onChange={handleInput}
              />
              {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
            <button>Registrate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
