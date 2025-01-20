import { CronometroComponent } from './componets/cronometro/cronometro.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CronometroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inputOuputs';
}
