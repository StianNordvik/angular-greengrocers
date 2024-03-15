import { Component, inject } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  private itemsService = inject(ItemsService);
  cart = this.itemsService.cartItems;

  getTotal(): number {
    let sum = 0;
    this.cart.forEach((item) => (
      sum += item.price)
    );
    return sum;
  }

}
