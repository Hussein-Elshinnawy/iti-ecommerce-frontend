import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../types/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartProducts: { product: Product, quantity: number }[] = [];
  cartTotal=0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getcartProducts().subscribe((data) => this.cartProducts = data);
    this.cartService.getCartTotal().subscribe((data)=> this.cartTotal=data);
  }

  increaseQuantity(productId: number) {
    this.cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: number) {
    this.cartService.decreaseQuantity(productId);
  }
}

