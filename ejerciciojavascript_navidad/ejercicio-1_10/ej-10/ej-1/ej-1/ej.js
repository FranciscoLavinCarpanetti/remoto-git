function generarTablaMultiplicar(numero, limite) {
  let tabla = [];
  for (let i = 1; i <= limite; i++) {
    tabla.push(numero * i);
  }
  return tabla;
}

let numero = 5;
let limite = 10;
let tabla = generarTablaMultiplicar(numero, limite);
console.log(tabla);
