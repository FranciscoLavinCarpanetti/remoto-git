import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nombre: string = 'Francisco Javier';
  apellido: string = 'Lavin Carpanetti';
  url: string = 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09Bulldog2.jpg?itok=i-myMuFd';
  title: string = `me llam ${this.nombre}`;
  job: string = '';
  color: string = 'tomato';
  numero: string = 6;

  usuario: any = {
    nombre: 'Pepe',
    apellido: 'Villuela',
    edad: 67,
    email: 'pep@gmail.com'
  }


  onclick(tocado: string) {
    alert('Hola mundo' + tocado);
  }


  capturarJob(event: any) {
    this.job = event.target.value;
  }

  cambiarColor(event: any): void {
    this.color = event.target.value;

  }

  cambiarNumero(event: any) {
    this.numero = event.target.value;
  }
}
