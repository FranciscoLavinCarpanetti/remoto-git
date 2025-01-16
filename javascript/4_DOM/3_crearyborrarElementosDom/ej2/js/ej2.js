/*
1 - Teneis que crear un listado de 10 alumnos con nombre, apellidos, edad, nota del 1 al 10   ✅
2 - Pintar todos los alumnos dentro de una section del html, usando obligatoriamente createElement ✅
3 - Asignar un color al nombre del alumno en funcion de su nota. rojo <= 3, naranja 3 < 5, verde >= 5 ✅
4 - quiero que mi aplicacion me permita ver los listado de rojo naraja y verde de forma individual.

*/

const listadoAlumnos = [
    { nombre: 'Ana', apellidos: 'Garcia Rodriguez', edad: 25, nota: 8 },
    { nombre: 'Juan', apellidos: 'Lopez Sanchez', edad: 30, nota: 9 },
    { nombre: 'Maria', apellidos: 'Perez Molina', edad: 28, nota: 4 },
    { nombre: 'Pedro', apellidos: 'Garcia Sanchez', edad: 32, nota: 7 },
    { nombre: 'Sofia', apellidos: 'Hernandez Martinez', edad: 26, nota: 5 },
    { nombre: 'Luis', apellidos: 'Fernandez Diaz', edad: 29, nota: 6 },
    { nombre: 'Maria', apellidos: 'Sanchez Gomez', edad: 27, nota: 3 },
    { nombre: 'Jose', apellidos: 'Gomez Sanchez', edad: 31, nota: 2 },
    { nombre: 'Maria', apellidos: 'Rodriguez Diaz', edad: 24, nota: 10 },
    { nombre: 'Juan', apellidos: 'Perez Gomez', edad: 33, nota: 1 }
]

const body = document.body;

function getColorByNota(nota) {
    if (nota >= 0 && nota < 3) {
        return 'red'
    } else if (nota >= 3 && nota < 5) {
        return 'orange'
    } else if (nota >= 5 && nota < 11) {
        return 'green'
    }
}

function printOneStudent(student, dom) {
    const article = document.createElement('article'); //<article></article>
    const h3 = document.createElement('h3');
    h3.textContent = `${student.nombre} ${student.apellidos}`;
    h3.style.color = getColorByNota(student.nota);
    const ul = document.createElement('ul');
    ul.innerHTML = `<li>Edad: ${student.edad}</li><li>Nota: ${student.nota}</li>`

    article.append(h3, ul);

    dom.appendChild(article)
}


function printAllStudents(list, body) {
    const section = document.createElement('section');
    list.forEach(student => printOneStudent(student, section))
    body.appendChild(section)

}

function filterByNota(list, notaMin, notaMax) {
    return list.filter(student => student.nota >= notaMin && student.nota < notaMax)
}


const listaRoja = filterByNota(listadoAlumnos, 0, 3)
const listaNaranja = filterByNota(listadoAlumnos, 3, 5)

printAllStudents(listaRoja, body);
printAllStudents(listaNaranja, body);

//en formato callback ejecucion
printAllStudents(filterByNota(listadoAlumnos, 5, 11), body)