import { Component, inject } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
// import {product} from '../../../../../FET-ex1/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ProductlistComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService:CartService =inject(CartService);

  deleteFromCart(item:any){
    this.cartService.delete(item);
  }
}
