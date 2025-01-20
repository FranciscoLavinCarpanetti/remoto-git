import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  imports: [],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent {
  numero: number = 0;
  intervalo: any;

  constructor() {
    this.intervalo = setInterval(() => {
      this.numero++;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}
