import { Component } from '@angular/core';
import { ArrobaSwitchComponent } from './components/arroba-switch/arroba-switch.component';
/*import { Component } from '@angular/core';
import { ArrobaIfComponent } from "./components/arroba-if/arroba-if.component";
import { MenuTabsComponent } from './components/menu-tabs/menu-tabs.component';
import { ArrobaForComponent } from "./components/arroba-for/arroba-for.component";
import { PeliculasComponent } from './components/peliculas/peliculas.component';*/

@Component({
  selector: 'app-root',
  imports: [ /*ArrobaIfComponent, 
    MenuTabsComponent, 
    ArrobaIfComponent, 
    ArrobaForComponent, 
    PeliculasComponent,*/,
    ArrobaSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'controlFlow';
}
