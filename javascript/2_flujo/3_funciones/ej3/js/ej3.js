/*
    Hacer un programa que me permita saber si un numero es primo o no. Un numero es primo siempre y cuando no exista ningun numero menor que el, que su division sea cero. Exceptuando el 1 y el propio numero
*/

function isPrimo(numero) {
    let resultado = true;

    if (numero === 1) {
        console.log(false)
    }
    // buscar si el numero no es primo.
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            resultado = false;
            break;
        }
    }

    console.log(resultado);
}

isPrimo(1)



function isPrimoRecursivo(numero, divisor = 2) {

    //caso base
    if (numero < 2) {
        return false
    }

    if (divisor >= numero) {
        return true;
    }

    //caso 1: si el numero es divisible por el divisor
    if (numero % divisor === 0) {
        return false
    }
    return isPrimoRecursivo(numero, divisor + 1)
}

console.log(isPrimoRecursivo(5))