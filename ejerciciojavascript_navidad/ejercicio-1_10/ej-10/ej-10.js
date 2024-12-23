function ordenarNumeros(arrayNumeros, orden) {
  if (orden === "asc") {
    return arrayNumeros.sort((a, b) => a - b);
  } else if (orden === "desc") {
    return arrayNumeros.sort((a, b) => b - a);
  } else {
    throw new Error("El parámetro 'orden' debe ser 'asc' o 'desc'");
  }
}

let numeros = [5, 3, 8, 1, 2, 7];
let ordenAscendente = ordenarNumeros(numeros, "asc");
console.log("Orden ascendente:", ordenAscendente);

let ordenDescendente = ordenarNumeros(numeros, "desc");
console.log("Orden descendente:", ordenDescendente);
