const productos = [];

function agregarProducto() {
  const id = productos.length + 1;
  const title = prompt("Introduce el título del producto:");
  const price = parseFloat(prompt("Introduce el precio del producto:"));
  const quantity = parseInt(prompt("Introduce la cantidad del producto:"));
  const active = confirm("¿El producto está activo?");

  const producto = { id, title, price, quantity, active };
  productos.push(producto);

  pintarProductos();
}

function pintarProductos() {
  const productosSection = document.getElementById("productos");
  productosSection.innerHTML = "";

  const productosActivos = productos.filter((producto) => producto.active);

  productosActivos.forEach((producto) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const productTitle = document.createElement("h2");
    productTitle.textContent = producto.title;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Precio: €${producto.price.toFixed(2)}`;

    const productQuantity = document.createElement("p");
    productQuantity.textContent = `Cantidad: ${producto.quantity}`;

    productDiv.appendChild(productTitle);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productQuantity);

    productosSection.appendChild(productDiv);
  });
}
