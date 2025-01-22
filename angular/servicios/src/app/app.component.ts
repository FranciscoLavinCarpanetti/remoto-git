import { Component } from '@angular/core';
import { FormComponent } from "./components/form/form.component";
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';


@Component({
  selector: 'app-root',
  imports: [FormComponent, ListaContactosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicios';
}
