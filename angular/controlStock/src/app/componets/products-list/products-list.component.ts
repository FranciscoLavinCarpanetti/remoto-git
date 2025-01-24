import { ProductsService } from './../../services/products.service';
import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productos: IProduct[] = [];

  ProductsService = inject(ProductsService);


  ngOnInit() {
    this.productos = this.ProductsService.getAll();


  }

}
