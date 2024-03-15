import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('item') item: Item | null = null;
  @Output('add') addEvent = new EventEmitter<any>();



  addItem(){
    this.addEvent.emit(this.item);   
  }

}
