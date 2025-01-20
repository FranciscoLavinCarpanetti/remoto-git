import { DiblebidingComponent } from './compnets/diblebiding/diblebiding.component';
import { Component } from '@angular/core';
import { ContadorComponent } from "./components/contador/contador.component";


@Component({
  selector: 'app-root',
  imports: [ContadorComponent, DiblebidingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes';
}
