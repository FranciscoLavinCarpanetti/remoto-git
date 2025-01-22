import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/icontact.type=interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private arrayContactos: IContact[] = [
    { id: 1, nombre: 'Juan', telefono: '123456789', email: 'mlio@gmail.com' },
    { id: 2, nombre: 'Pepe', telefono: '987654321', email: 'malit@gmail.com' },
    { id: 3, nombre: 'Ana', telefono: '123456789', email: 'mo@gmail.com' },
    { id: 4, nombre: 'Maria', telefono: '987654321', email: 'mal@gmail.com' },
    { id: 5, nombre: 'Lucia', telefono: '123456789', email: 'maio@gmail.com' },
    { id: 6, nombre: 'Pedro', telefono: '987654321', email: 'malito@gmail.com' },
    { id: 7, nombre: 'Jose', telefono: '123456789', email: 'mato@gmail.com' },
    { id: 8, nombre: 'Luis', telefono: '987654321', email: 'ito@gmail.com' },
    { id: 9, nombre: 'Carlos', telefono: '123456789', email: 'mao@gmail.com' },
    { id: 10, nombre: 'David', telefono: '987654321', email: 'mito@gmail.com' },
    { id: 11, nombre: 'Javier', telefono: '123456789', email: 'maito@gmail.com' },
    { id: 12, nombre: 'Jorge', telefono: '987654321', email: 'alito@gmail.com' },
    { id: 13, nombre: 'Marta', telefono: '123456789', email: 'malo@gmail.com' },
    { id: 14, nombre: 'Elena', telefono: '987654321', email: 'malio@gmail.com' },
    { id: 15, nombre: 'Sara', telefono: '123456789', email: 'malit@gmail.com' }
  ]
  private id: number = 16;


  getAll(): IContact[] {
    return this.arrayContactos;
  }
  insert(newcontacto: IContact): string {
    newcontacto.id = this.id;
    let contactoDuplicado = this.arrayContactos.findIndex(contacto => contacto.telefono === newcontacto.telefono);
    if (contactoDuplicado === -1) {
      this.arrayContactos.push(newcontacto);
      this.id++;
      return 'El contacto se ha añadido correctamente';
    } else {
      return 'El contacto ya existe';
    }
  }










}