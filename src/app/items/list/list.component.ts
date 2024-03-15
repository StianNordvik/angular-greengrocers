import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly itemsService: ItemsService){}
  items = this.getItems();

  getItems() {
    return this.itemsService.items;
  }

  addItem(item: any){
    this.itemsService.cartItems.push(item);
    console.log(this.itemsService.cartItems)
  }

  
}
