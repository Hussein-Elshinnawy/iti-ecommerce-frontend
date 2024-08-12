import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productMap: Map<number, { product: Product, quantity: number }> = new Map();
  private cartCounter = new BehaviorSubject<number>(0);
  private cartProducts = new BehaviorSubject<{ product: Product, quantity: number }[]>([]);
  private cartTotal = new BehaviorSubject<number>(0);  

  constructor() {}

  getcartCounter() {
    return this.cartCounter.asObservable();
  }

  getcartProducts() {
    return this.cartProducts.asObservable();
  }

  getCartTotal() {  
    return this.cartTotal.asObservable();
  }

  addProductCart(product: Product) {
    if (this.productMap.has(product.id)) {
      const existingProduct = this.productMap.get(product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    } else {
      this.productMap.set(product.id, { product, quantity: 1 });
    }

    this.updateCart();
  }

  updateCart() {
    const productsArray = Array.from(this.productMap.values());
    this.cartProducts.next(productsArray);
    this.cartCounter.next(productsArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity, 0)
    );
    this.calculateCartTotal();  
  }

  calculateCartTotal() {  
    const total = Array.from(this.productMap.values()).reduce(
      (accumulator, currentValue) => accumulator + (currentValue.product.price * currentValue.quantity), 0
    );
    this.cartTotal.next(total);
  }

  increaseQuantity(productId: number) {
    const productEntry = this.productMap.get(productId);
    if (productEntry) {
      productEntry.quantity += 1;
      this.updateCart();
    }
  }

  decreaseQuantity(productId: number) {
    const productEntry = this.productMap.get(productId);
    if (productEntry && productEntry.quantity > 1) {
      productEntry.quantity -= 1;
      this.updateCart();
    } else if (productEntry) {
      this.productMap.delete(productId);
      this.updateCart();
    }
  }
}
