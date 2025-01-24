import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private arrProductos: IProduct[] = []
  private id: number = 1;


  insert(newProduct: IProduct): any {
    let busqueda = this.arrProductos.find(product => product.title.toLocaleLowerCase() === newProduct.title.toLocaleLowerCase());
    if (busqueda === undefined) {
      newProduct.id = this.id;
      this.arrProductos.push(newProduct);
      this.id++;
      return { message: "Producto agregado correctamente" };
    } else {
      busqueda.quantity += newProduct.quantity;
      return { message: "Producto actualizado correctamente" };
    }



  }


}
