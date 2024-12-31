function ordenarNumeros() {
  const numero1 = parseInt(document.getElementById("numero1").value);
  const numero2 = parseInt(document.getElementById("numero2").value);
  const numero3 = parseInt(document.getElementById("numero3").value);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    resultadoDiv.innerHTML = "<p>Por favor, introduce números válidos.</p>";
    return;
  }

  let numeros = [numero1, numero2, numero3];
  numeros.sort((a, b) => b - a);

  resultadoDiv.innerHTML = `<p>Números en orden decreciente: ${numeros.join(
    ", "
  )}</p>`;
}
