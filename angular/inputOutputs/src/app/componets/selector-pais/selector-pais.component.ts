import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-selector-pais',
  imports: [],
  templateUrl: './selector-pais.component.html',
  styleUrl: './selector-pais.component.css'
})
export class SelectorPaisComponent {
  @Output() paisEnviado = new EventEmitter<string> = new EventEmitter();

  cargarPais(event: any) {
    let pais: string = event.target.value;
    this.paisEnviado.emit(pais);
  }
}
