//capturamos los elementos con los que vamos a trabajar.
const formCalculadora = document.querySelector('#calculadora');
const resultadoSpan = document.querySelector('#resultado');
const casio = new Calculadora();

//evento del formulario
function obtenerDatos(event) {
    event.preventDefault()
    let numero1 = Number(event.target.numero1.value);
    let numero2 = Number(event.target.numero2.value);
    let operacion = event.target.operacion.value;

    switch (operacion) {
        case 'sumar':
            //sumariamos
            casio.sumar(numero1, numero2)
            break;

        case 'restar':
            //Restariamos
            casio.restar(numero1, numero2)
            break;

        case 'multiplicar':
            //multiplicariamos
            casio.multiplicar(numero1, numero2)
            break;
    }

    //pintar resultado
    casio.printResult(resultadoSpan)

}
formCalculadora.addEventListener('submit', obtenerDatos);