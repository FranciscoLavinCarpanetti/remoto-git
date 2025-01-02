const base_datos = [
  { id: 1, name: "ma+nz*anas", stock: true },
  { id: 2, name: "a((na((car**dos", stock: false },
  { id: 3, name: "a$$$$g**uac&ate", stock: true },
  { id: 4, name: "p$$***iña$", stock: true },
  { id: 5, name: "c&ar$$n***e", stock: false },
  { id: 6, name: "f*r*ambues%sa$s", stock: true },
  { id: 7, name: "c&e&&re&&eal&es", stock: false },
  { id: 8, name: "q &&**ues***o", stock: true },
  { id: 9, name: "p$oll$o$", stock: false },
  { id: 10, name: "a%%%g**u++ua", stock: true },
  { id: 11, name: "ve*r*du*r*as&&", stock: true },
];

function limpiarNombre(nombre) {
  return nombre.replace(/[^a-zA-Zñáéíóúü\s]/g, "");
}

function productosConStock(base_datos) {
  return base_datos
    .map((producto) => ({
      ...producto,
      name: limpiarNombre(producto.name),
    }))
    .filter((producto) => producto.stock);
}

const productosDisponibles = productosConStock(base_datos);
console.log(productosDisponibles);
