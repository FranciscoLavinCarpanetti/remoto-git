function generarArray() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 51);
    array.push(numeroAleatorio);
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  const arrayFiltrado = array.filter(
    (numero) => ![10, 20, 30, 40, 50].includes(numero)
  );

  resultadoDiv.innerHTML = `<p>Array generado: ${array.join(", ")}</p>`;
  resultadoDiv.innerHTML += `<p>Array filtrado (sin decenas): ${arrayFiltrado.join(
    ", "
  )}</p>`;
}
