function validarpassword(contrasena) {
  const tieneLongitudSuficiente = contrasena.length >= 8;
  const tieneNumero = /\d/.test(contrasena);
  const tieneMayuscula = /[A-Z]/.test(contrasena);

  return tieneLongitudSuficiente && tieneNumero && tieneMayuscula;
}

// Ejemplo de uso:
const contrasena = "Password1";
console.log(validarpassword(contrasena));
