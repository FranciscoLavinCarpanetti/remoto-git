import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-color',
  imports: [],
  templateUrl: './boton-color.component.html',
  styleUrl: './boton-color.component.css'
})
export class BotonColorComponent {
  @Output() colorEnviado: EventEmitter<string> = new EventEmitter()
  numero: string = '';





  cargarColor(color: string): void {

    this.colorEnviado.emit(color);
  }
}
