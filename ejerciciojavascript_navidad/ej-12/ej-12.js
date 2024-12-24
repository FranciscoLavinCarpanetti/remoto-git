function multiplicar() {
  const numero1 = parseInt(document.getElementById("numero1").value);
  const numero2 = parseInt(document.getElementById("numero2").value);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (isNaN(numero1) || isNaN(numero2)) {
    resultadoDiv.innerHTML = "<p>Por favor, introduce números válidos.</p>";
    return;
  }

  let resultado = 0;
  for (let i = 0; i < Math.abs(numero2); i++) {
    resultado += Math.abs(numero1);
  }

  // Ajustar el signo del resultado si uno de los números es negativo
  if ((numero1 < 0 && numero2 > 0) || (numero1 > 0 && numero2 < 0)) {
    resultado = -resultado;
  }

  resultadoDiv.innerHTML = `<p>El resultado de multiplicar ${numero1} por ${numero2} es: ${resultado}</p>`;
}
