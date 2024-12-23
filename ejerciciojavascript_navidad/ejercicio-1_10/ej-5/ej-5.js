function filtrarPalabrasPorLongitud(arrayPalabras, longitudMinima) {
  return arrayPalabras.filter((palabra) => palabra.length >= longitudMinima);
}

let palabras = ["manzana", "pera", "plátano", "kiwi", "fresa"];
let longitudMinima = 4;
let resultado = filtrarPalabrasPorLongitud(palabras, longitudMinima);
console.log(resultado);
