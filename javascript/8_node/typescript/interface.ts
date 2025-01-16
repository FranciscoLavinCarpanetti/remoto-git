interface usuario {
    nombre: string;
    apellido: string;
    edad: number;
    email?: string;
}

const usuario: usuario[] = [{ nombre: 'Juan', apellido: 'Perez', edad: 30 },
{ nombre: 'Maria', apellido: 'Gomez', edad: 25 },
{ nombre: 'Carlos', apellido: 'Gonzalez', edad: 40, email: 'juanito@gmail.com' }
];

let nombre: any = 'Juan';
nombre = 0;

interface tarea {
    title: string;
    priority: number;
    status: boolean;
    printTask(): string;
    completeTask(boolean: boolean): void;
}

class Tarea implements tarea {
    title: "";
    priority: 0;
    status: false;
    printTask(): string {
        return `${this.title} - ${this.priority}`;
    }
    completeTask(boolean: boolean): void {

        this.status = boolean;
    }

}   // fin de la clase Tarea
