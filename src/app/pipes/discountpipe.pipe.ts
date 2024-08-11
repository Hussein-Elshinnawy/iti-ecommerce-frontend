import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountpipe',
  standalone: true
})
export class DiscountpipePipe implements PipeTransform {

  transform(price: number, discountPercentage: number): string {
  
    const discountedPrice = price * (100-discountPercentage)/100;

    return ` $${price.toFixed(2)} after discount $${discountedPrice.toFixed(2)}`;
  }

}
