function filtrarVocales() {
  const frase = document.getElementById("frase").value;
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  const fraseSinVocales = frase.replace(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g, "");

  resultadoDiv.innerHTML = `<p>Frase sin vocales: ${fraseSinVocales}</p>`;
}
