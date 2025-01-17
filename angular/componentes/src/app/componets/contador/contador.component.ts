import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador: number = 1;

  aumentar() {
    if (this.contador < 20)
      this.contador++;
  }

  disminuir() {
    if (this.contador > 0) {
      this.contador--;
    }
  }



}
