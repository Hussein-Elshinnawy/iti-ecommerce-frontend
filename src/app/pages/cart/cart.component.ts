// import { Component } from '@angular/core';
// import { CartService } from '../../services/cart.service';
// import { Product } from '../../types/product';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent {
//   cartProducts:Product[]=[];
//   constructor(private cartService:CartService){}
//   ngOnInit(){
//     this.cartService.getcartProducts().subscribe((data:any)=> this.cartProducts=data);
//   }

// }
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

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getcartProducts().subscribe((data) => this.cartProducts = data);
  }

  increaseQuantity(productId: number) {
    this.cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: number) {
    this.cartService.decreaseQuantity(productId);
  }
}

