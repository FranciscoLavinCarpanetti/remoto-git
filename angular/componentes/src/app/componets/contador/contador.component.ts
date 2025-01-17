import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador: number = 0;
  color: string = 'gray';
  plus: boolean = true;
  minus: boolean = true;

  cambairColor(numero: number) {
    if (numero > 0) {
      this.color = 'green';
    }
    else if (numero < 0) {
      this.color = 'tomato';
    }
    else {
      this.color = 'gray';
    }
  }
  aumentar() {
    this.minus = false;
    if (this.contador < 20) {
      this.contador++;
      this.cambairColor(this.contador);
    }

  }


  disminuir() {
    this.plus = false;
    if (this.contador > -20) {
      this.contador--;
      this.cambairColor(this.contador);
    }
  }




}
