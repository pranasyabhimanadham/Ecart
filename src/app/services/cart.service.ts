import { Injectable } from '@angular/core';
import { IProduct } from '../dummyDataInterfaces';

export interface CartItem {
  product: IProduct;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(product: IProduct, quantity: number = 1) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id,
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.items.find((item) => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  removeItem(productId: number) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  clearCart() {
    this.items = [];
  }
}
