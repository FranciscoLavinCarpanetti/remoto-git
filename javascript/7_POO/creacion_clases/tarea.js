class Tarea {
    titulo = ""
    prioridad = ""
    estado = false;

    //es el metodo que me permite inicializar la tarea
    constructor(titulo, prioridad) {
        this.titulo = titulo
        this.prioridad = prioridad;
    }

    completarTarea() {
        this.estado = true;
    }

    printTarea(dom) {
        dom.innerHTML = `<p>${this.titulo} - ${this.estado}</p>`
    }

    cambiarTitulo(nuevotitulo) {
        this.titulo = nuevotitulo;
    }
}



let tarea1 = new Tarea('estudiar javascript', 'urgente')
tarea1.completarTarea()
tarea1.printTarea(document.body)
let tarea2 = new Tarea('plantar un arbol', 'normal')
tarea2.cambiarTitulo('En un lugar de la mancha')
console.log(tarea1)
console.log(tarea2)

