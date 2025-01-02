function generarNumeros() {
  const numeros = [];
  for (let i = 0; i < 50; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(numeroAleatorio);
  }

  const seccionPares = document.getElementById("pares");
  const seccionImpares = document.getElementById("impares");
  seccionPares.innerHTML = "<h2>Números Pares</h2>";
  seccionImpares.innerHTML = "<h2>Números Impares</h2>";

  numeros.forEach((numero) => {
    const numeroElemento = document.createElement("p");
    numeroElemento.textContent = numero;

    if (numero % 2 === 0) {
      seccionPares.appendChild(numeroElemento);
    } else {
      seccionImpares.appendChild(numeroElemento);
    }
  });
}
