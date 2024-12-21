let numeros = [1, 3, 3, 4, 5, 6, 7, 9, 9, 10];
function contarParesEImpares(arrayNumeros) {
  let contador = {
    pares: 0,
    impares: 0,
  };

  arrayNumeros.forEach((numero) => {
    if (numero % 2 === 0) {
      contador.pares++;
    } else {
      contador.impares++;
    }
  });

  return contador;
}

let resultado = contarParesEImpares(numeros);
console.log(resultado);
