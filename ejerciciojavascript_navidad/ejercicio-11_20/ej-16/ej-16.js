function generarTabla() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (isNaN(numero)) {
    resultadoDiv.innerHTML = "<p>Por favor, introduce un número válido.</p>";
    return;
  }

  let tabla = "";
  for (let i = 1; i <= 10; i++) {
    tabla += `${numero} x ${i} = ${numero * i}<br>`;
  }

  resultadoDiv.innerHTML = tabla;
}
