import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../types/product';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, provideRouter, withComponentInputBinding } from '@angular/router';
import { filter } from 'rxjs';
import { DiscountpipePipe } from '../../pipes/discountpipe.pipe';
import { ProductService } from '../../services/product.service';
import { ProductsRequestsService } from '../../services/products-requests.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf, NgFor, DiscountpipePipe],
  providers: [
    // provideRouter(appRoutes, withComponentInputBinding()),
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  productId:number =0;
  productObj:Product | any ;
  constructor(private route: ActivatedRoute, private productsRequestsService:ProductsRequestsService) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = +params.get('id')!;
      // this.productObj = this.productList.find(product => product.id === productId);
      
      this.productsRequestsService.getproductsbyid(productId).subscribe((data: any)=> this.productObj=data);
    
   
    });
  }
  getStarArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return Array(fullStars).fill(1).concat(Array(emptyStars).fill(0));
  }
  
  
  
  
  
}
