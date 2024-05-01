import { Component, inject } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ProductlistComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // route:ActivatedRoute =inject(ActivatedRoute);
  cartService:CartService =inject(CartService);

  deleteFromCart(item:any){
    this.cartService.delete(item);
  }
}
