/*
    Hacer un programa que me permita calcular el importe de una factura ordenada por cliente.
        - ejemplo: servicio de 1000 euros + IVA = 1210 euros
        - la aplicacion me permitirá elegir el porcentaje de iva.
*/

const calcularPorcentaje = (precio, porcentaje) => (precio * porcentaje) / 100;
const sumar = (n1, n2) => n1 + n2;

function pintarFactura(precio, iva, cliente) {
    document.write(`<section>
                        <h1> Factura para ${cliente}</h1>
                        <p>El coste total es de ${precio} y el IVA de esta factura es ${iva}</p>   
                    </section>`)
}

function calcularPrecioFactura(precioBase, porcentaje, cliente) {
    const IVA = calcularPorcentaje(precioBase, porcentaje)
    const PRECIOFINAL = sumar(precioBase, IVA)
    pintarFactura(PRECIOFINAL, IVA, cliente)
}

let nombreCliente = prompt('dime el nombre del cliente: ')
let precioBase = Number(prompt('Dime el precio base del producto: '))
let tantoporciento = Number(prompt('Dime el porcentaje del impuesto a aplicar: '))

calcularPrecioFactura(precioBase, tantoporciento, nombreCliente);