import { CartService } from './../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { CartItem } from '../../services/cart.service';
import { IProduct } from '../../dummyDataInterfaces';

export interface CartEmitter {
  index: number;
  quantity: number;
}

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  @Input() index!: number;
  @Output() quantityChangeEmitter = new EventEmitter<CartEmitter>();
  @Output() deleteItemEmitter = new EventEmitter<number>();

  decreaseQuantity() {
    if (this.cartItem.quantity > 0) {
      this.cartItem.quantity--;
      this.onUpdateQuantity();
    }
  }
  increaseQuantity() {
    if (this.cartItem.quantity < this.cartItem.product.stock) {
      this.cartItem.quantity++;
      this.onUpdateQuantity();
    }
  }

  deleteItem() {
    this.deleteItemEmitter.emit(this.cartItem.product.id);
  }

  onUpdateQuantity() {
    this.quantityChangeEmitter.emit({
      index: this.index,
      quantity: this.cartItem.quantity,
    });
  }
}
