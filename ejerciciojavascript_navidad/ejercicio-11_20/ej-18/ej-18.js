function sumarImpares() {
  const numeros = [];
  for (let i = 1; i <= 10; i++) {
    const numero = parseInt(document.getElementById(`numero${i}`).value);
    if (!isNaN(numero)) {
      numeros.push(numero);
    }
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  const sumaImpares = numeros.reduce((suma, numero) => {
    if (numero % 2 !== 0) {
      return suma + numero;
    }
    return suma;
  }, 0);

  resultadoDiv.innerHTML = `<p>La suma de los números impares es: ${sumaImpares}</p>`;
}
