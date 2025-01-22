import { Component, inject } from '@angular/core';
import { IContact } from '../../interfaces/icontact.type=interface';
import { ContactosService } from '../../services/contactos.service';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-lista-contactos',
  imports: [ContactoComponent],
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})
export class ListaContactosComponent {
  listaContactos: IContact[] = [];
  contactosService = inject(ContactosService)

  ngOnInit() {
    this.listaContactos = this.contactosService.getAll();
  }








}
