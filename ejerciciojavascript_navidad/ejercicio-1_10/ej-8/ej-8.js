function contarVocales(cadena) {
  const vocales = ["a", "e", "i", "o", "u"];
  const contador = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let char of cadena.toLowerCase()) {
    if (vocales.includes(char)) {
      contador[char]++;
    }
  }

  return contador;
}

let texto = "Hola, ¿cómo estás?";
let resultado = contarVocales(texto);
console.log(resultado);
