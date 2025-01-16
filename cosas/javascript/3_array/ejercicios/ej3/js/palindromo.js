//Quiero que me digais si una palabra o frase, dando igual mayusculas y espacios es un palindromo.
// un palidromo es una palabra que se lee exactamente igual de izq->der der->izq sin tener en cuenta las mayusculas y los espacios.
// ana
// La ruta nos aporto otro paso natural

// paso 1: Crear un funcion que reciba como parametro la frase o texto ✅
// paso 2: Convertir todo el texto en minusculas ✅
// paso 3: quitar los espacios ✅
// paso 4: quitar las tildes (lo hace profe) ✅
// paso 5: darle la vuelta al texto ✅
// paso 6: comparar que sin iguales y devolver si es o no palindromo.

let frase = 'La Ruta nos aportó otro Paso Natural';

function quitarAcentos(texto) {
    texto = texto.replaceAll('á', 'a');
    texto = texto.replaceAll('é', 'e');
    texto = texto.replaceAll('ó', 'o');
    texto = texto.replaceAll('í', 'i');
    texto = texto.replaceAll('ú', 'u');
    return texto
}

function isPalindrome(texto) {
    let minusculas = texto.toLowerCase()
    //replaceAll es una funcion que sustituye el primero parametro por el segundo en toda la frase
    let fraseSinEspacios = minusculas.replaceAll(" ", "")

    let fraseSinAcentos = quitarAcentos(fraseSinEspacios)
    let arrayLetras = fraseSinAcentos.split("");
    let arrayInvertido = arrayLetras.toReversed();

    let frase = arrayLetras.join("");
    let fraseInvertido = arrayInvertido.join("")

    return frase === fraseInvertido ? 'es un palindromo' : 'no es un palindromo'

}

console.log(isPalindrome(frase))

