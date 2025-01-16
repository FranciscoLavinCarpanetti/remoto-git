let nombre: string = 'Francisco';
let edad: number = 30;
let estado: boolean = false;
console.log(estado);

const nombres: string[] = ['Francisco', 'Luis', 'Ana'];



const numeros: Array<number> = [1, 2, 3, 4, 5];

//funciones se puede tipar los parametros y el retorno

function sumar(n1: number, n2: number): void {
    console.log(n1 + n2);
}
sumar(5, 5);

const restar = (n1: number, n2: number): number => {
    return n1 - n2;
}
console.log(restar(5, 10));