import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../dummyDataInterfaces';
import { AuthService } from './AuthService';


export interface CartItem {
  product: IProduct;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = new BehaviorSubject<CartItem[]>([]);

  constructor(private authService: AuthService) {}  // Inject AuthService

  addToCart(product: IProduct, quantity: number = 1) {
    if (!this.authService.isLoggedIn) {
      console.log('User must be logged in to add items to the cart.');
      return;
    }

    const updatedItems = this.items.value.map((item) => {
      if (item.product.id === product.id) {
        const newQuantity = item.quantity + quantity;
        return {
          ...item,
          quantity:
            newQuantity > item.product.stock ? item.product.stock : newQuantity,
        };
      }
      return item;
    });

    if (!updatedItems.find((item) => item.product.id === product.id)) {
      updatedItems.push({ product, quantity });
    }

    this.items.next(updatedItems);
  }

  updateQuantity(productId: number, quantity: number) {
    const updatedItems = this.items.value.map((item) => {
      if (item.product.id === productId) {
        return {
          ...item,
          quantity:
            quantity > item.product.stock ? item.product.stock : quantity,
        };
      }
      return item;
    });

    this.items.next(updatedItems);
  }

  getItems() {
    return this.items.asObservable();
  }

  getQuantity(productId: number): number {
    const item = this.items.value.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  }

  removeItem(productId: number) {
    const updatedItems = this.items.value.filter(
      (item) => item.product.id !== productId,
    );
    this.items.next(updatedItems);
  }
}
