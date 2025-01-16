function miDecorador(constructor: Function) {
    console.log('El decorador de a Ejecutado');
}
@miDecorador
class miClase {
    nombre: string = '';
    constructor(nombre: string) {
        this.nombre = nombre;
        console.log('Bienvenido ' + nombre);
    }
}
const clase = new miClase('Francisco');