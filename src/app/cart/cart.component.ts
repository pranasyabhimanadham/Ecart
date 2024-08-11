import { CartItem, CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import {
  CartEmitter,
  CartItemComponent,
} from './cart-item/cart-item.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, RouterLink, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  data: CartItem[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

  updateQuantity(info: CartEmitter) {
    this.cartService.updateQuantity(
      this.data[info.index].product.id,
      info.quantity,
    );
    this.calculateTotalPrice();
  }
  calculateTotalPrice(): void {
    this.totalPrice = Number(
      this.data
        .reduce((total, cartItem) => {
          const discount = cartItem.product.discountPercentage
            ? 1 - cartItem.product.discountPercentage / 100
            : 1;
          return (
            total + cartItem.quantity * (cartItem.product.price * discount)
          );
        }, 0)
        .toFixed(2),
    );
  }

  deleteItem(productId: number) {
    this.cartService.removeItem(productId);
    this.calculateTotalPrice();
  }

  ngOnInit() {
    this.cartService.getItems().subscribe((items) => {
      this.data = items;
      this.calculateTotalPrice();
    });
  }
}

/*
  Add to cart from:
    - Home page (ProductCardComponent)
    - Details page (ProductDetailsComponent)

  Change Quantity of an Item in:
    - Product Details (ProductDetailsComponent)
    - Cart Page (CartItemComponent)

  -- Display the Total Quantity of total Product in the navbar

  -- Calculate the total price of cart items in the Cart page (CarComponent)

*/

/*

  Navbar listens for total quantity changes (from cart)

  Home page

*/
