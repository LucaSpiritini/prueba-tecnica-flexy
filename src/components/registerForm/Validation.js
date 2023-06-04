export default function Validation(values) {
  const errors = {}

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^.{8,}$/; //minimo 8 caracteres

  if(values.image === "") {
    errors.image = "Suba una imagen de perfil";
  }

  if(values.name === "") {
    errors.name = "Debe ingresar un nombre";
  }

  if(values.phone === "") {
    errors.phone = "Debe ingresar un número de teléfono";
  }

  if(values.email === "") {
    errors.email = "Debe ingresar un email";
  }
  else if(!email_pattern.test(values.email)) {
    errors.email = "Debe ingresar un email válido"
  }

  if(values.password === "") {
    errors.password = "Debe ingresar una contraseña"
  }
  else if(!password_pattern.test(values.password)) {
    errors.password = "Debe ingresar un formato de contraseña válido"
  }

  return errors;

}
