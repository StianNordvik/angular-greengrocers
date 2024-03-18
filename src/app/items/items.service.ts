import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  http = inject(HttpClient);
  cartItems: Item[] = [];

  get items(): Promise<Item[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}groceries`))
  }
}
