function calcularMultiplos() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  if (isNaN(numero)) {
    resultadosDiv.innerHTML = "<p>Por favor, introduce un número válido.</p>";
    return;
  }

  let multiplos = [];
  let suma = 0;

  for (let i = 1; i <= 10; i++) {
    let multiplo = numero * i;
    multiplos.push(multiplo);
    suma += multiplo;
  }

  const lista = document.createElement("ul");
  multiplos.forEach((multiplo) => {
    const item = document.createElement("li");
    item.textContent = multiplo;
    lista.appendChild(item);
  });

  resultadosDiv.appendChild(lista);
  resultadosDiv.innerHTML += `<p>Suma de los múltiplos: ${suma}</p>`;
}
