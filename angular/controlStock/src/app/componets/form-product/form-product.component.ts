import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-form-product',
  imports: [ReactiveFormsModule],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  productForm: FormGroup;

  productServices = inject(ProductsService);


  constructor() {
    this.productForm = new FormGroup({
      title: new FormControl('', []),
      price: new FormControl(0, []),
      quantity: new FormControl(0, [])
    }, []);
  }



  getDataProduct() {
    const respuesta = this.productServices.insert(this.productForm.value);
    alert(respuesta.message)
    this.productForm.reset();
  }

}
