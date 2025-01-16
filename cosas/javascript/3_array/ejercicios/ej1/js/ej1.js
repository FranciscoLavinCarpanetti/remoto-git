// Dado un array de animales con 5 animales, nombre, peso, peligrosidad(1-3) siendo 1 menos peligroso  3 mas peligroso.

// pintar los animales en articles dentro de un section quiero que asigneis un color a cada peligrosidad. rojo 3, naranja 2, azul al 1, un borde de 2px de ese color.

const animales = [
    { nombre: 'León', peso: 500, peligrosidad: 1 },
    { nombre: 'tigre', peso: 150, peligrosidad: 3 },
    { nombre: 'oso', peso: 120, peligrosidad: 3 },
    { nombre: 'puma', peso: 100, peligrosidad: 2 },
    { nombre: 'gato', peso: 50, peligrosidad: 1 },
    { nombre: 'elefante', peso: 300, peligrosidad: 2 },
    { nombre: 'jirafa', peso: 200, peligrosidad: 1 },
    { nombre: 'lobo', peso: 80, peligrosidad: 3 },
    { nombre: 'mono', peso: 30, peligrosidad: 2 },
    { nombre: 'colibri', peso: 10, peligrosidad: 1 },
    { nombre: 'gusano', peso: 10, peligrosidad: 1 },
]

function getColorPeligrosidad(numero) {
    switch (numero) {
        case 1:
            return 'lightblue';
            break;

        case 2:
            return 'orange';
            break;

        case 3:
            return 'tomato';
            break;
    }
}


function pintarUnAnimal(animal) {
    return `<article style='border-color: ${getColorPeligrosidad(animal.peligrosidad)}'>
            <h2>${animal.nombre}</h2>
            <p>Peso: ${animal.peso}kg</p>
        </article>`
}

function pintarTodosAnimales(listaAnimales) {
    let html = '<section class="animales">'
    for (let animal of listaAnimales) {
        html += pintarUnAnimal(animal)
    }
    html += '</section>';
    document.write(html)
}

pintarTodosAnimales(animales)