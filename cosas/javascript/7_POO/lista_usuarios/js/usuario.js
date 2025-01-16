class Usuario {
    nombre = ""
    edad = 0;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    printData(dom) {
        const li = document.createElement('li');
        li.textContent = `${this.nombre} - ${this.edad}`;
        dom.appendChild(li);
    }

}