import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  cartService:CartService=inject(CartService);
  products :any[]=[
    {name:'Product1',price:150,id:1},
    {name:'Product2',price:150,id:2},
    {name:'Product3',price:150,id:3},
    {name:'Product4',price:150,id:4},
    {name:'Product5',price:150,id:5},
  ];
  addToCart (product:any){
    this.cartService.addToCart(product);

  }
}
