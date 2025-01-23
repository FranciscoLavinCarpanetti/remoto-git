import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      edad: new FormControl(),
      dni: new FormControl(),
      password: new FormControl(),
      repitepassword: new FormControl(),
      profesion: new FormControl()


    }[]){


    }


    getDataForm() {
      console.log(this.formModel.value);


    }




  }
}