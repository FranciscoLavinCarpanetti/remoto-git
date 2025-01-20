import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  imports: [],
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent {
  @Input() miFoto: any;
  url: string = 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09Bulldog2.jpg?itok=i-myMuFd';
  title: string = 'mi perro';
  ngOnInit() {
    this.url = this.miFoto.imageUrl;
    this.title = this.miFoto.title;

  }
}
