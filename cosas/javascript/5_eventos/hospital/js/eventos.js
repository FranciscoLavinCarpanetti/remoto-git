//pintar el listado completo de pacientes.

const sectionPacientes = document.querySelector('#pacientes .grid');

/*
<article>
        <h3>Nombre completo del paciente</h3>
        <ul>
            <li>Edad: 43</li>
            <li>DNI: 456789V</li>
        </ul>
        <div class="enfermedad">
                ASMA
        </div>
</article> 
*/
function printOnePatient(patient, dom) {
    const article = document.createElement('article'); //<article></article>
    const h3 = document.createElement('h3'); // <h3></h3>
    h3.textContent = `${patient.nombre} ${patient.apellidos}`; //<h3>Rocio Jurado</h3>
    const ul = document.createElement('ul'); // <ul></ul>
    ul.innerHTML = `<li>Edad: ${patient.edad}</li>
                    <li>DNI: ${patient.dni}</li>`
    const div = document.createElement('div'); //<div></div>
    div.classList.add('enfermedad'); //<div class="enfermedad"></div>
    div.textContent = patient.enfermedad //<div class="enfermedad">ASMA</div>
    article.append(h3, ul, div)
    dom.appendChild(article);
}

function printAllPatients(list, dom) {
    dom.innerHTML = "";
    if (list.length > 0) {
        list.forEach(patient => printOnePatient(patient, dom))
    } else {
        dom.innerHTML = "<h2>NO HAY PACIENTES</h2>";
    }
}
printAllPatients(pacientes, sectionPacientes);

//let listaPacientesPorEdad = filterByAge(18, 25, pacientes);
//printAllPatients(listaPacientesPorEdad, sectionPacientes)

//let listaFiltradaDiagnostico = filterByDiagnosis('Gripe', pacientes);
//printAllPatients(listaFiltradaDiagnostico, sectionPacientes)

//let listaFiltradaPorEdad = filterByAge(50, 120, pacientes);
//let listaFiltradaGripe = filterByDiagnosis('gripe', listaFiltradaPorEdad)
//printAllPatients(listaFiltradaGripe, sectionPacientes)

// formulario de filtrado de edad.
function getDataAge(event) {
    event.preventDefault();
    let ageMin = parseInt(event.target.agemin.value);
    let ageMax = parseInt(event.target.agemax.value);
    if (ageMin <= ageMax) {
        //puedo filtrar por rango de edad
        const listaFiltradaPorEdad = filterByAge(ageMin, ageMax, pacientes);
        printAllPatients(listaFiltradaPorEdad, sectionPacientes)
    } else {
        alert('Edad minima no puede ser mayor que la maxima')
    }
    //vaciar el formulario
    event.target.reset();
}

const formAge = document.querySelector('#formAge');
formAge.addEventListener('submit', getDataAge);

// capturamos el selector de diagnostico.
const selectorDiagnosis = document.querySelector('#selectDiagnosis');
function seleccionarEnfermedad(event) {
    let enfermedadBuscada = event.target.value;
    const listaPacientesPorDiagnosis = filterByDiagnosis(enfermedadBuscada, pacientes);
    printAllPatients(listaPacientesPorDiagnosis, sectionPacientes);

}

selectorDiagnosis.addEventListener('change', seleccionarEnfermedad)


// filtro combinado.
//capturar el formulario que contiene todos los campos
const formFiltroCompleto = document.querySelector('#filtroCompleto');
function getDataFormComplete(event) {
    event.preventDefault();
    let edadmin = parseInt(event.target.agemin.value);
    let edadmax = parseInt(event.target.agemax.value);
    let enfermedad = event.target.enfermedad.value;

    if (event.target.agemin.value !== "" && event.target.agemax.value !== "" && event.target.enfermedad.value !== "") {
        const listaPorEdad = filterByAge(edadmin, edadmax, pacientes);
        const listaPorEnfermedadyEdad = filterByDiagnosis(enfermedad, listaPorEdad);
        printAllPatients(listaPorEnfermedadyEdad, sectionPacientes)
    } else if (event.target.agemin.value !== "" && event.target.agemax.value !== "" && event.target.enfermedad.value === "") {
        const listaPorEdad = filterByAge(edadmin, edadmax, pacientes);
        printAllPatients(listaPorEdad, sectionPacientes)
    } else if (event.target.agemin.value === "" && event.target.agemax.value === "" && event.target.enfermedad.value !== "") {
        const listaPorEnfermedad = filterByDiagnosis(enfermedad, pacientes);
        printAllPatients(listaPorEnfermedad, sectionPacientes)
    }
}

formFiltroCompleto.addEventListener('submit', getDataFormComplete);