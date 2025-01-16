// calculadora me va a pedir dos numeros y un tipo de calculo sumar, restar, multiplicar y dividir y va a pintar el resultado por pantalla.


function sumar(n1, n2) {
    let resultadoCris = n1 + n2;
    return resultadoCris;
}

function restar(numeritoA, numeritoB) {
    return numeritoA - numeritoB
}

function multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2;
    return resultado;
}

function dividir(dividendo, divisor) {
    let resultado = 0
    if (divisor !== 0) {
        resultado = dividendo / divisor;
    } else {
        alert('No se puede dividir por cero')
    }
    return resultado
}


function pintarResultado(valor) {
    document.write(`<h1 style="color: green">${valor}</h1>`)
}

function calcular(numeroA, numeroB, operacion) {
    let resultado = 0;
    switch (operacion) {
        case 'sumar':
            // esto lo hace cris
            resultado = sumar(numeroA, numeroB)
            break;

        case 'restar':
            // esto lo hace mauricio
            resultado = restar(numeroA, numeroB)
            break;

        case 'multiplicar':
            //esto lo hace fran
            resultado = multiplicar(numeroA, numeroB)
            break;

        case 'dividir':
            //esto lo hace marlon
            resultado = dividir(numeroA, numeroB)
            break;
    }

    //pintar el resultado 
    pintarResultado(resultado)
}



calcular(12, 24, 'sumar')
calcular(12, 24, 'restar')
calcular(12, 4, 'dividir')
calcular(100, 2, 'multiplicar')