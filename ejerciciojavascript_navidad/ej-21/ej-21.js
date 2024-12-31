const nominas = [
  { id: 1, nombre: "Juan", bruto: 30000, irpf: 19, pagas: 12 },
  { id: 2, nombre: "Manu", bruto: 20000, irpf: 15, pagas: 14 },
  { id: 3, nombre: "Ruben", bruto: 22000, irpf: 17, pagas: 16 },
  { id: 4, nombre: "Danny", bruto: 19000, irpf: 14, pagas: 12 },
];

nominas.forEach((nomina) => {
  const netoAnual = nomina.bruto - (nomina.bruto * nomina.irpf) / 100;
  const netoMensual = netoAnual / nomina.pagas;
  nomina.netoAnual = netoAnual;
  nomina.netoMensual = netoMensual;
});

console.log(nominas);
