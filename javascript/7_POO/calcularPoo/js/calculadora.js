class Calculadora {

    resultado = 0;
    operacion = "";
    n1 = 0;
    n2 = 0;

    //metodo constructor no es obligatorio en javascript si no inicializo valores.å

    sumar(n1, n2) {
        this.n1 = n1
        this.n2 = n2
        this.operacion = 'sumar'
        this.resultado = n1 + n2;
        return this.resultado;
    }

    restar(n1, n2) {
        this.n1 = n1
        this.n2 = n2
        this.operacion = 'restar'
        this.resultado = n1 - n2;
        return this.resultado;
    }

    multiplicar(n1, n2) {
        this.n1 = n1
        this.n2 = n2
        this.operacion = 'multiplicar'
        this.resultado = n1 * n2;
        return this.resultado;
    }

    printResult(dom) {
        dom.textContent = `El resultado de ${this.operacion} los numero ${this.n1} y ${this.n2} es ${this.resultado}`
    }
}