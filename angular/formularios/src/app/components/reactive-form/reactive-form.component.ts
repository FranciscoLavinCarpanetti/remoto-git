import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
        Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      edad: new FormControl("", [
        Validators.required,
        Validators.min(18),
        Validators.max(100)
      ]),
      dni: new FormControl("", []),
      password: new FormControl("", []),
      repitepassword: new FormControl("", []),
    }[]){


    }


    getDataForm() {
      console.log(this.formModel.value);


    }




  }
  checkErrorField(field: string, error: string): boolean {
    if (this.formModel.get(field).hasError(error)?.hasError(error) && this.formModel.get(field)?.touched) {
      return true;

    } return false;
  }
}