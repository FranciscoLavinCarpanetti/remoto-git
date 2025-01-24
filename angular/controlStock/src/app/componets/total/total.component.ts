import { inject } from '@angular/core/testing';
import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {

  ProductsService = inject(ProductsService)
  cantidadTotal: number = 0;
  precioTotal: number = 0;


  ngOnInit() {
    let productos = this.ProductsService.getAll();

    for (let product of productos) {
      this.cantidadTotal += product.cantidad;

    }
  }

}
