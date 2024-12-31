const productos = [
  { name: "Leche", price: 1.2, stock: true, category: "lácteos" },
  { name: "Queso", price: 3.5, stock: true, category: "lácteos" },
  { name: "Yogur", price: 0.9, stock: false, category: "lácteos" },
  { name: "Carne de res", price: 10.0, stock: true, category: "carnes" },
  { name: "Pollo", price: 7.5, stock: false, category: "carnes" },
  { name: "Manzana", price: 1.0, stock: true, category: "frutas" },
  { name: "Plátano", price: 1.1, stock: true, category: "frutas" },
  { name: "Zanahoria", price: 0.8, stock: true, category: "verduras" },
  { name: "Lechuga", price: 0.7, stock: false, category: "verduras" },
  { name: "Salmón", price: 15.0, stock: true, category: "pescados" },
  { name: "Atún", price: 12.0, stock: false, category: "pescados" },
];

const filtrarPorPrecio = productos.filter(
  (producto) => producto.price >= 1 && producto.price <= 3
);
console.log("Productos con precio entre 1 y 3 euros:", filtrarPorPrecio);

const filtrarPorCategoria = (categoria) =>
  productos.filter((producto) => producto.category === categoria);
console.log(
  "Productos de la categoría lácteos:",
  filtrarPorCategoria("lácteos")
);

const filtrarPorStock = productos.filter((producto) => producto.stock);
console.log("Productos disponibles en stock:", filtrarPorStock);

const filtrarPorPrecioYStock = productos.filter(
  (producto) => producto.price >= 1 && producto.price <= 3 && producto.stock
);
console.log(
  "Productos con precio entre 1 y 3 euros y disponibles en stock:",
  filtrarPorPrecioYStock
);
