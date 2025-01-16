const pacientes = [
    {
        nombre: "Juan", apellidos: "Pérez García", edad: 25, enfermedad: "Gripe", dni: "12345678A"
    },
    {
        nombre: "María", apellidos: "López Martínez", edad: 40, enfermedad: "Diabetes", dni: "87654321B"
    },
    {
        nombre: "Ana", apellidos: "González Ruiz", edad: 30, enfermedad: "Hipertensión", dni: "45678912C"
    },
    {
        nombre: "Pedro", apellidos: "Martín López", edad: 50, enfermedad: "Gripe", dni: "32165498D"
    },
    {
        nombre: "Laura", apellidos: "Hernández Torres", edad: 20, enfermedad: "Hipertensión", dni: "74125896E"
    },
    {
        nombre: "Carlos", apellidos: "Sánchez Morales", edad: 60, enfermedad: "Diabetes", dni: "96385274F"
    },
    {
        nombre: "Lucía", apellidos: "Fernández Díaz", edad: 35, enfermedad: "Asma", dni: "15975368G"
    },
    {
        nombre: "David", apellidos: "Ramírez Gómez", edad: 45, enfermedad: "Hipertensión", dni: "85296314H"
    },
    {
        nombre: "Sofía", apellidos: "Vargas Torres", edad: 55, enfermedad: "Gripe", dni: "74136982I"
    },
    {
        nombre: "Marta", apellidos: "Navarro Ruiz", edad: 28, enfermedad: "Asma", dni: "36925874J"
    }
]

// filtrar por rango de edad min y edad maxima
function filterByAge(ageMin, ageMax, list) {
    return list.filter(patient => patient.edad >= ageMin && patient.edad <= ageMax);
}

//console.log(filterByAge(18, 25, pacientes))

function filterByDiagnosis(enfermedad, list) {
    return list.filter(patient => patient.enfermedad.toLowerCase() === enfermedad.toLowerCase())
}