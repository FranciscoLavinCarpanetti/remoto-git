function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "La cadena está formada solo por mayúsculas.";
  } else if (cadena === cadena.toLowerCase()) {
    return "La cadena está formada solo por minúsculas.";
  } else {
    return "La cadena es una mezcla de mayúsculas y minúsculas.";
  }
}

let cadena1 = "HOLAPEDRO";
let cadena2 = "holajuan";
let cadena3 = "HoLaFranCisco";

console.log(analizarCadena(cadena1));
console.log(analizarCadena(cadena2));
console.log(analizarCadena(cadena3));
