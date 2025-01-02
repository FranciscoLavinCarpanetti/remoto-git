const pacientes = [
  {
    nombre: "Juan",
    apellidos: "Pérez García",
    edad: 25,
    enfermedad: "Gripe",
    dni: "12345678A",
  },
  {
    nombre: "María",
    apellidos: "López Martínez",
    edad: 40,
    enfermedad: "Diabetes",
    dni: "87654321B",
  },
  {
    nombre: "Ana",
    apellidos: "González Ruiz",
    edad: 30,
    enfermedad: "Hipertensión",
    dni: "45678912C",
  },
  {
    nombre: "Pedro",
    apellidos: "Martín López",
    edad: 50,
    enfermedad: "Gripe",
    dni: "32165498D",
  },
  {
    nombre: "Laura",
    apellidos: "Hernández Torres",
    edad: 20,
    enfermedad: "Hipertensión",
    dni: "74125896E",
  },
  {
    nombre: "Carlos",
    apellidos: "Sánchez Morales",
    edad: 60,
    enfermedad: "Diabetes",
    dni: "96385274F",
  },
  {
    nombre: "Lucía",
    apellidos: "Fernández Díaz",
    edad: 35,
    enfermedad: "Asma",
    dni: "15975368G",
  },
  {
    nombre: "David",
    apellidos: "Ramírez Gómez",
    edad: 45,
    enfermedad: "Hipertensión",
    dni: "85296314H",
  },
  {
    nombre: "Sofía",
    apellidos: "Vargas Torres",
    edad: 55,
    enfermedad: "Gripe",
    dni: "74136982I",
  },
  {
    nombre: "Marta",
    apellidos: "Navarro Ruiz",
    edad: 28,
    enfermedad: "Asma",
    dni: "36925874J",
  },
];

function filtrarPorEdad(pacientes, edadMinima, edadMaxima) {
  return pacientes.filter(
    (paciente) => paciente.edad >= edadMinima && paciente.edad <= edadMaxima
  );
}

function filtrarPorDiagnostico(pacientes, diagnostico) {
  return pacientes.filter(
    (paciente) =>
      paciente.enfermedad.toLowerCase() === diagnostico.toLowerCase()
  );
}

function filtrarCombinado(pacientes, edadMinima, edadMaxima, diagnostico) {
  return pacientes.filter(
    (paciente) =>
      paciente.edad >= edadMinima &&
      paciente.edad <= edadMaxima &&
      paciente.enfermedad.toLowerCase() === diagnostico.toLowerCase()
  );
}

function mostrarPacientes(pacientes) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (pacientes.length === 0) {
    resultadoDiv.innerHTML =
      "<p>No se encontraron pacientes con los criterios especificados.</p>";
    return;
  }

  const lista = document.createElement("ul");

  pacientes.forEach((paciente) => {
    const item = document.createElement("li");
    item.textContent = `Nombre: ${paciente.nombre} ${paciente.apellidos}, Edad: ${paciente.edad}, Diagnóstico: ${paciente.enfermedad}, DNI: ${paciente.dni}`;
    lista.appendChild(item);
  });

  resultadoDiv.appendChild(lista);
}

function filtrarPacientes() {
  const edadMinima = parseInt(document.getElementById("edadMinima").value);
  const edadMaxima = parseInt(document.getElementById("edadMaxima").value);
  const diagnostico = document.getElementById("diagnostico").value;

  let pacientesFiltrados = pacientes;

  if (!isNaN(edadMinima) && !isNaN(edadMaxima)) {
    pacientesFiltrados = filtrarPorEdad(
      pacientesFiltrados,
      edadMinima,
      edadMaxima
    );
  }

  if (diagnostico) {
    pacientesFiltrados = filtrarPorDiagnostico(pacientesFiltrados, diagnostico);
  }

  mostrarPacientes(pacientesFiltrados);
}
