console.log('Francisco Lavin');
function sumar(n1, n2) {
    console.log(n1 + n2);
}
sumar(5, 5);
sumar(10, 10);

const url = 'https://api.chucknorris.io/jokes/random';

async function cargarDatos(url) {
    try {
        let peticion = await fetch(url);
        let datos = await peticion.json();
        console.log(datos)
    }catch (error) {
        console.log('Error en la carga de datos');
    }
}
cargarDatos(url);