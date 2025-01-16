//pedir un numero pantalla y si el numero es par pintar en html en un h1 de verde, y si impar pintarlo en un p de color rojo.


function isPar(valor) {
    return (valor % 2 === 0) ? true : false;
}

function pintarResultado(etiqueta, color, numero) {
    document.write(`<${etiqueta} style="color: ${color}">${numero}</${etiqueta}>`)
}

function pintarNumero(numero) {
    let color = isPar(numero) ? 'green' : 'red'
    let etiqueta = isPar(numero) ? 'h1' : 'h3';
    pintarResultado(etiqueta, color, numero)
}


pintarNumero(12)
pintarNumero(13)



