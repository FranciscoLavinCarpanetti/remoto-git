import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diblebiding',
  imports: [FormsModule],
  templateUrl: './diblebiding.component.html',
  styleUrl: './diblebiding.component.css'
})
export class DiblebidingComponent {

  numero: number = 12;
  frase: string = 'En un lugar de la mancha';
  seleccion: string = 'ceo';



  mostrarDatos() {
    console.log(this.numero);
    console.log(this.frase);
    console.log(this.seleccion);
  }
}

