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
  filter = "All";

  getItems() {
    return this.itemsService.items;
  }

  addItem(item: any){
    this.itemsService.cartItems.push(item);
    console.log(this.itemsService.cartItems);
  }

  updateFilter(filterBy: string): void {
    this.filter = filterBy;
    this.items = this.filterItems();

  }

  async filterItems(){
    if(this.filter === "fruit"){
      return (await this.getItems()).filter(item => item.type === "fruit");
    }
    if(this.filter === "vegetable"){
      return (await this.getItems()).filter(item => item.type === "vegetable");
    }
    else {
      return this.getItems();
    }
  }

  async sortItems(sortBy: string): Promise<void> {
    this.items = this.filterItems();
    if(sortBy === "price"){
      await (await this.getItems()).sort((a, b) => a.price - b.price);
    }
    if(sortBy === "name"){
      await (await this.getItems()).sort((a, b) => a.name.localeCompare(b.name));

    }

  }

  
}
