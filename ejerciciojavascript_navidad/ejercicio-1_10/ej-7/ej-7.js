function analizarNotas(notas) {
  if (notas.length === 0) {
    return {
      promedio: 0,
      notaMasAlta: 0,
      notaMasBaja: 0,
      numeroAprobados: 0,
    };
  }

  let suma = 0;
  let notaMasAlta = notas[0];
  let notaMasBaja = notas[0];
  let numeroAprobados = 0;

  notas.forEach((nota) => {
    suma += nota;
    if (nota > notaMasAlta) notaMasAlta = nota;
    if (nota < notaMasBaja) notaMasBaja = nota;
    if (nota >= 60) numeroAprobados++;
  });

  let promedio = suma / notas.length;

  return {
    promedio: promedio,
    notaMasAlta: notaMasAlta,
    notaMasBaja: notaMasBaja,
    numeroAprobados: numeroAprobados,
  };
}

let notas = [85, 92, 78, 60, 55, 70, 99, 45];
let resultado = analizarNotas(notas);
console.log(resultado);
