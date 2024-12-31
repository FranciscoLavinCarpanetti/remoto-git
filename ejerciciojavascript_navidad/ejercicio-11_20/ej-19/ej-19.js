function generarLista() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (isNaN(numero)) {
    resultadoDiv.innerHTML = "<p>Por favor, introduce un número válido.</p>";
    return;
  }

  let lista = [numero];
  for (let i = 1; i <= 5; i++) {
    lista.push(lista[i - 1] * 2);
  }

  let ul = "<ul>";
  lista.forEach((item) => {
    ul += `<li>${item}</li>`;
  });
  ul += "</ul>";

  resultadoDiv.innerHTML = ul;
}
