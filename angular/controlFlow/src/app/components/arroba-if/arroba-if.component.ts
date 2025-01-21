import { Component } from '@angular/core';

@Component({
  selector: 'app-arroba-if',
  imports: [],
  templateUrl: './arroba-if.component.html',
  styleUrl: './arroba-if.component.css'
})
export class ArrobaIfComponent {
  visible: boolean = false;
  texto: string = "mostar";
  edad: number = 36;

  mostar() {
    this.texto = this.visible ? "mostrar" : "ocultar";
    this.visible = !this.visible;
  }
  upDateAge(event: any) {
    this.edad = Number(event.target.value);
  }




}
