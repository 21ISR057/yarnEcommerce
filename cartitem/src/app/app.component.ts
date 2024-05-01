import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { CartComponent } from './components/cart/cart.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductlistComponent,CartComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
