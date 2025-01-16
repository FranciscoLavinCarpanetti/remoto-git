const ulList = document.querySelector('#listado');

function borrarProducto(event) {
    let id = parseInt(event.target.dataset.id)
    event.target.parentNode.remove()
    //borrar un producto implica borrar lo BBDD array y del dom.

    //le proceso de borrado logico de un array primero necesito saber la posicion del elemento y luego aplicar splice(posicion, cantidad)
    //primero saber la posicion del objeto
    let posicion = productos.findIndex(producto => producto.id === id)
    productos.splice(posicion, 1)
    console.log(productos);

}


// <li>Manzana - 2 <button>borrar</button></li> 
function printOneProduct(product, dom) {
    const li = document.createElement('li'); // <li></li>
    li.textContent = `${product.nombre} - ${product.cantidad} ` //<li>Manzana - 2 </li> 
    const button = document.createElement('button'); //<button></button>
    button.textContent = 'borrar'; //<button>borrar</button>
    button.addEventListener('click', borrarProducto)
    button.dataset.id = product.id
    li.appendChild(button);
    dom.appendChild(li);
}

function printAllProducts(list, dom) {
    list.forEach(product => printOneProduct(product, dom));
}

printAllProducts(productos, ulList)