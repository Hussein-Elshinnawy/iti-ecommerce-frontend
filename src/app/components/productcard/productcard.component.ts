import { CommonModule, NgFor } from '@angular/common';
// import { HttpClient,  } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}
  @Input() productData:any;
  handleRedirect(idVal: number) {
    this.router.navigate(['/productdetails', idVal]);
  }
  addToCart(event: Event) {
    
    alert('added to cart');
    event.stopPropagation();
  }
}
