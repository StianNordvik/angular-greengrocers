import { Component, inject } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private itemsService = inject(ItemsService);
  cart = this.itemsService.cartItems;

  countQuantity(item: Item) {
    return this.cart.filter((x) => x.name === item.name).length;
  }

  unique(cart: Item[]) {
    return cart.filter(
      (value, index, self) => index === self.findIndex((t) => t.id === value.id)
    );
  }
  


}


