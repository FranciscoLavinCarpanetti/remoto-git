import { SelectorPaisComponent } from './componets/selector-pais/selector-pais.component';
import { Component } from '@angular/core';
import { CronometroComponent } from "./components/cronometro/cronometro.component";
import { FotoComponent } from './componets/foto/foto.component';
import { BotonColorComponent } from './componets/boton-color/boton-color.component';

@Component({
  selector: 'app-root',
  imports: [CronometroComponent, FotoComponent, BotonColorComponent, SelectorPaisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inputOutputs';
  numero = 234;
  arrayFotos: any = [
    { title: 'Perro hermoso', imageUrl: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09Bulldog2.jpg?itok=i-myMuFd' },
    { title: ' perro de colores', imageUrl: 'https://static.wixstatic.com/media/34e812_60937fee545845e2bb2cf90dee76d484~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/34e812_60937fee545845e2bb2cf90dee76d484~mv2.jpg' },
    { title: 'posibilidad 2', imageUrl: 'https://static01.nyt.com/images/2018/03/18/fashion/16frenchie/16frenchie-videoSixteenByNine3000.jpg?year=2018&h=1688&w=3000&s=86a278cc344505454a4edd22ab4362591c04a574bc8f82efea4e48c2ce7216fc&k=ZQJBKqZ0VN&tw=1' }

  ]

  /**cambiarColor(event: string) {
    this.color = event;
  }*/

  pintarPais(event: string) {
    console.log(event);
  }
}
