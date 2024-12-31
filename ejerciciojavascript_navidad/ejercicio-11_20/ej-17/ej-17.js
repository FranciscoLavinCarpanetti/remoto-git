function generarCuadrados() {
  const numero = parseInt(document.getElementById("numero").value);
  const lado = parseInt(document.getElementById("lado").value);
  const colorInicial = document.getElementById("colorInicial").value;
  const orientacion = document.getElementById("orientacion").value;
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (isNaN(numero) || isNaN(lado) || !colorInicial) {
    resultadoDiv.innerHTML = "<p>Por favor, introduce valores válidos.</p>";
    return;
  }

  const coloresAlternos = alternarColor(colorInicial);
  const contenedor = document.createElement("div");
  contenedor.className = orientacion;

  for (let i = 0; i < numero; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.className = "cuadrado";
    cuadrado.style.width = `${lado}px`;
    cuadrado.style.height = `${lado}px`;
    cuadrado.style.backgroundColor = coloresAlternos[i % 2];
    contenedor.appendChild(cuadrado);
  }

  resultadoDiv.appendChild(contenedor);
}

function alternarColor(colorInicial) {
  const colorAlterno = colorInicial === "#000000" ? "#FFFFFF" : "#000000";
  return [colorInicial, colorAlterno];
}
