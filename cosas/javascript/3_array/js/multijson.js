const estudiantes = [
    {
        nombre: 'Juan Antonio',
        apellidos: 'Perez Jarillo',
        edad: 42,
        foto: 'https://randomuser.me/api/portraits/men/52.jpg',
        direccion: {
            calle: 'Avenida de la Constitución 18 1D',
            cp: '08080',
            ciudad: 'Barcelona'
        }
    },
    {
        nombre: 'Marta',
        apellidos: 'Lopez Guitierrez',
        edad: 32,
        foto: 'https://randomuser.me/api/portraits/women/52.jpg',
        direccion: {
            calle: 'Calle alegria 19',
            cp: '28009',
            ciudad: 'Madrid'
        }
    },
    {
        nombre: 'Lucia',
        apellidos: 'Alvarez Lopez',
        edad: 40,
        foto: 'https://randomuser.me/api/portraits/women/51.jpg',
        direccion: {
            calle: 'Paseo de la acacias 34 3D',
            cp: '28012',
            ciudad: 'Madrid'
        }
    }
]

//nombre del segundo registro
console.log(estudiantes[1]['edad'])
console.log(estudiantes[1].edad)
console.log(estudiantes[1].direccion.calle)
console.log(estudiantes[1]['direccion']['ciudad'], estudiantes[1].nombre)

function printOneStudent(studentData) {
    return `<article>
            <figure>
                <img src="${studentData.foto}" > 
            </figure>
            <h3>${studentData.nombre} ${studentData.apellidos}</h3>
            <p>Dirección: ${studentData.direccion.calle} ${studentData.direccion.cp} ${studentData.direccion.ciudad}</p>     
    </article>`
}

function printStudents(studentsList) {
    let section = '<section class="estudiantes">'
    for (let student of studentsList) {
        section += printOneStudent(student)
    }
    section += '</section>'
    document.write(section)
}

printStudents(estudiantes)