const alimentos = [
  { nombreAlimento: "Manzana", categoria: "Fruta", calorías: 52 },
  { nombreAlimento: "Zanahoria", categoria: "Verdura", calorías: 41 },
  { nombreAlimento: "Lechuga", categoria: "Verdura", calorías: 14 },
  { nombreAlimento: "Pollo", categoria: "Carne", calorías: 239 },
  { nombreAlimento: "Yogur", categoria: "Lácteo", calorías: 59 },
  { nombreAlimento: "Galleta", categoria: "Dulce", calorías: 502 },
  { nombreAlimento: "Plátano", categoria: "Fruta", calorías: 89 },
  { nombreAlimento: "Espinaca", categoria: "Verdura", calorías: 23 },
  { nombreAlimento: "Pescado", categoria: "Pescado", calorías: 206 },
  { nombreAlimento: "Tomate", categoria: "Verdura", calorías: 18 },
];

function separarAlimentos(alimentos) {
  const saludables = alimentos.filter((alimento) => alimento.calorías < 15);
  const noSaludables = alimentos.filter((alimento) => alimento.calorías >= 15);

  return { saludables, noSaludables };
}

function pintarAlimentos() {
  const { saludables, noSaludables } = separarAlimentos(alimentos);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  const listaSaludables = document.createElement("ul");
  listaSaludables.className = "saludable";
  saludables.forEach((alimento) => {
    const item = document.createElement("li");
    item.textContent = `${alimento.nombreAlimento} (${alimento.categoría}) - ${alimento.calorías} calorías`;
    listaSaludables.appendChild(item);
  });

  const listaNoSaludables = document.createElement("ul");
  listaNoSaludables.className = "no-saludable";
  noSaludables.forEach((alimento) => {
    const item = document.createElement("li");
    item.textContent = `${alimento.nombreAlimento} (${alimento.categoría}) - ${alimento.calorías} calorías`;
    listaNoSaludables.appendChild(item);
  });

  resultadoDiv.innerHTML = "<h2>Saludables</h2>";
  resultadoDiv.appendChild(listaSaludables);
  resultadoDiv.innerHTML += "<h2>No Saludables</h2>";
  resultadoDiv.appendChild(listaNoSaludables);
}

pintarAlimentos();
