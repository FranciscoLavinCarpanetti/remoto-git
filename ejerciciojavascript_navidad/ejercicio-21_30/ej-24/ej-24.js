const nombres = [
  "Ana",
  "Juan",
  "Pedro",
  "María",
  "Luis",
  "Carmen",
  "José",
  "Francisco",
  "Laura",
  "Marta",
];

function dividirPorLongitud(array) {
  const resultado = {};

  array.forEach((nombre) => {
    const longitud = nombre.length;
    if (!resultado[longitud]) {
      resultado[longitud] = [];
    }
    resultado[longitud].push(nombre);
  });

  return Object.values(resultado);
}

const subArrays = dividirPorLongitud(nombres);
console.log(subArrays);
