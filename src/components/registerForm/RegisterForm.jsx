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
      <div className="form-container">
        <form onSubmit={handleValidation}>
          <div className="">
            <div className="upload-image-div">
              <div className="image">
                {/* <input
                  type="file"
                  name="image"
                  id=""
                  className=""
                  onChange={handleInput}
                /> */}
              </div>
              <p className="upload-image-text">Subí tu foto de perfil</p>
              {/* {errors.image && <p style={{ color: "red" }}>{errors.image}</p>} */}
            </div>
          </div>

          <div className="input-div">
            <div className="">
              <input
                type="text"
                id="name"
                placeholder="Nombre y Apellido"
                name="name"
                className="input"
                onChange={handleInput}
              />
            </div>
            {errors.name && (
              <p
                style={{
                  color: "red",
                  marginTop: "-10px",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="input-div">
            <div className="">
              <input
                type="text"
                id="phone"
                placeholder="+54 9 221 000 0000"
                name="phone"
                className="input"
                onChange={handleInput}
              />
            </div>
            {errors.phone && (
              <p
                style={{
                  color: "red",
                  marginTop: "-10px",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div className="input-div">
            <div className="">
              <input
                type="email"
                id="email"
                placeholder="hola@tuemail.com"
                name="email"
                className="input"
                onChange={handleInput}
              />
            </div>
            {errors.email && (
              <p
                style={{
                  color: "red",
                  marginTop: "-10px",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="password-input-div">
            <div className="">
              <input
                type="password"
                id="password"
                placeholder="Ingresá tu contraseña"
                name="password"
                className="input"
                onChange={handleInput}
              />
            </div>
            {errors.password && (
              <p
                style={{
                  color: "red",
                  marginTop: "-10px",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                {errors.password}
              </p>
            )}
            <p className="olvidaste-contraseña">¿Olvidaste tu contraseña?</p>
          </div>

          <div className="button-div">
            <p className="caracteres">Debe tener al menos 8 caracteres.</p>
            <button className="button">
              <p className="button-p">Registrate</p>
            </button>

            <p className="button-div-p">
              ¿Ya tenés una cuenta?{" "}
              <b style={{ cursor: "pointer", color: "#000929" }}>
                Iniciá sesión
              </b>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
