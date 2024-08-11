import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCounter = new BehaviorSubject<number>(0);
  constructor() { }
  getcartCounter(){
    return this.cartCounter.asObservable();
  }
  setcartCounter(counter:number){
    this.cartCounter.next(counter);
  }
}
