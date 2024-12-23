function lanzarDados(cantidadDados) {
  let resultados = [];
  for (let i = 0; i < cantidadDados; i++) {
    let resultado = Math.floor(Math.random() * 6) + 1;
    resultados.push(resultado);
  }
  return resultados;
}

function contarResultados(arrayResultados) {
  let contador = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  arrayResultados.forEach((resultado) => {
    contador[resultado]++;
  });
  return contador;
}

let cantidadDados = 10;
let resultados = lanzarDados(cantidadDados);
console.log("Resultados de los dados:", resultados);

let frecuencias = contarResultados(resultados);
console.log("Frecuencia de cada número:", frecuencias);
