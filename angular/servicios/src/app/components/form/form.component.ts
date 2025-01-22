import { IContact } from './../../interfaces/icontact.type=interface';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  nuevoContact: IContact = {
    name: '',
    email: '',
    phone: ''
  };


  capturarDatos() {
    console.log(this.nuevoContact);
  }

}
