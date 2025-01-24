import { Component } from '@angular/core';
import { FormProductComponent } from "./componets/form-product/form-product.component";
import { ProductsListComponent } from './componets/products-list/products-list.component';
import { TotalComponent } from './componets/total/total.component';



@Component({
  selector: 'app-root',
  imports: [FormProductComponent, ProductsListComponent, TotalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'controlStock';
}
