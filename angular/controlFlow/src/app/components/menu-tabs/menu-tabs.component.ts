import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabs',
  imports: [],
  templateUrl: './menu-tabs.component.html',
  styleUrl: './menu-tabs.component.css'
})
export class MenuTabsComponent {
  currentCity: string = 'Lodon';


  cambiarCiudad(ciudad: string) {
    this.currentCity = ciudad;
  }
}
