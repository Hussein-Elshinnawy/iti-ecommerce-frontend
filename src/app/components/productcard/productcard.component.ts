import { CommonModule, NgFor } from '@angular/common';
// import { HttpClient,  } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../types/product';
import { CartService } from '../../services/cart.service';
// import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [CommonModule, NgFor ],
  // providers: [provideHttpClient()],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent  {

  @Output() sendRecipeId = new EventEmitter<number>();

  constructor(private router: Router, private cartService:CartService) {}
  @Input() productData:any;
  handleRedirect(idVal: number) {
    this.router.navigate(['/productdetails', idVal]);
  }
  addToCart(event: Event, product:Product) {
    console.log(product);
    this.cartService.addProductCart(product);
    // alert('added to cart');
    event.stopPropagation();
  }
 
}
