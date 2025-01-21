import { Component } from '@angular/core';
import { IContact } from '../../interface/icontact.interface';

@Component({
  selector: 'app-arroba-for',
  imports: [],
  templateUrl: './arroba-for.component.html',
  styleUrl: './arroba-for.component.css'
})
export class ArrobaForComponent {
  arrNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arrContactos: IContact[] = [
    { id: 1, name: 'Juan', phone: 2012141231 },
    { id: 2, name: 'Pedro', phone: 2012141232 },
    { id: 3, name: 'Maria', phone: 2012141233 },
    { id: 4, name: 'Luis', phone: 2012141234 },
    { id: 5, name: 'Ana', phone: 2012141235 },
  ];


}
