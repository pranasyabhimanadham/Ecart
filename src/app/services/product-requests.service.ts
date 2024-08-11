import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductRequest } from '../dummyDataInterfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductRequestsService {
  constructor(private http: HttpClient) {}

  getProductsList() {
    return this.http.get<IProductRequest>('https://dummyjson.com/products');
  }
  getProductDetails(id: string) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
