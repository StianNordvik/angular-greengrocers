import { Component, Input, OnInit, inject } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent  {
  @Input({ required: true }) item!: Item;
  @Input() quantity: number = 1;

  private itemsService: ItemsService = inject(ItemsService);


  remove(item: Item) {
    const index = this.itemsService.cartItems.findIndex(
      (x) => x.id === item.id
    );
    this.itemsService.cartItems.splice(index, 1);
  }

  add(item: Item) {
    this.itemsService.cartItems.push(item);
  }
}
