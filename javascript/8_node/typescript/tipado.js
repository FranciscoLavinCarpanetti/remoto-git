var nombre = 'Francisco';
var edad = 30;
var estado = false;
console.log(estado);
var nombres = ['Francisco', 'Luis', 'Ana'];
var numeros = [1, 2, 3, 4, 5];
//funciones se puede tipar los parametros y el retorno
function sumar(n1, n2) {
    console.log(n1 + n2);
}
sumar(5, 5);
var restar = function (n1, n2) {
    return n1 - n2;
};
console.log(restar(5, 10));
