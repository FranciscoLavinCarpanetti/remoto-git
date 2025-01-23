import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      edad: new FormControl("", [
        Validators.required,
        Validators.min(18),
        Validators.max(100)
      ]),
      dni: new FormControl("", [

      ]),
      password: new FormControl("", []),
      repitepassword: new FormControl("", []),
    }[
      this.passwordValidator])

  }
  passwordValidator(formFiels: AbstractControl): any {
    let password = formFiels.get('password')?.value;
    let repitepassword = formFiels.get('repitepassword')?.value;
    return password !== repitepassword ? { 'passwordvalidator': true } : null;
  }

  getDataForm() {
    console.log(this.formModel.value);


  }

  dniValidator(controlName: AbstractControl): any {
    const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let dni = controlName.value;
    let exp = /^d{8}[A-Z]{1}/;
    if (exp.test(dni)) {
      let letra = dni.at(-1)
      const numero = Number(dni.substring(0, dni.length - 1));
      const posicion = numero % 23;
      if (letra !== letrasDni[posicion]) {
        return { 'dnivalidator': 'la letra no coincide' };
      } else {
        return null;
      }
    }
    else {
      return { 'dnivalidator': 'el formato del DNI es incorrecto' };
    }
  }




  checkErrorField(field: string, error: string): boolean {
    if (this.formModel.get(field).hasError(error)?.hasError(error) && this.formModel.get(field)?.touched) {
      return true;

    } return false;
  }
}