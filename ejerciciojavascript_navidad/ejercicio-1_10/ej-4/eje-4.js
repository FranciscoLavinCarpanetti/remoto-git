function gestionarInventario(inventario, operaciones) {
  operaciones.forEach((operacion) => {
    const { producto, tipo, cantidad } = operacion;

    if (tipo === "añadir") {
      if (inventario[producto]) {
        inventario[producto] += cantidad;
      } else {
        inventario[producto] = cantidad;
      }
    } else if (tipo === "retirar") {
      if (inventario[producto]) {
        if (inventario[producto] >= cantidad) {
          inventario[producto] -= cantidad;
        } else {
          console.error(
            `Error: No hay suficientes unidades de ${producto} para retirar.`
          );
        }
      } else {
        console.error(
          `Error: El producto ${producto} no existe en el inventario.`
        );
      }
    }
  });

  return inventario;
}

let inventario = {
  manzanas: 10,
  naranjas: 5,
};

let operaciones = [
  { producto: "manzanas", tipo: "añadir", cantidad: 5 },
  { producto: "naranjas", tipo: "retirar", cantidad: 2 },
  { producto: "platanos", tipo: "añadir", cantidad: 10 },
  { producto: "manzanas", tipo: "retirar", cantidad: 20 },
];

let resultado = gestionarInventario(inventario, operaciones);
console.log(resultado);
