import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { AddComponent } from './add/add.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalComponent } from './total/total.component';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [
    ListComponent,
    CartComponent,
    AddComponent,
    ItemComponent,
    TotalComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListComponent,
    CartComponent,
    TotalComponent
  ]
})
export class ItemsModule { }
