import { Component } from '@angular/core';
import { ContadorComponent } from "./componets/contador/contador.component";


@Component({
  selector: 'app-root',
  imports: [ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes';

}
