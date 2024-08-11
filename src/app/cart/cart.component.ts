import { Component } from '@angular/core';
import { dummyData } from '../dummyData';
import { CartItemComponent } from './cart-item/cart-item.component';
import { IProduct } from '../dummyDataInterfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  data: IProduct[] = [dummyData[0], dummyData[1], dummyData[2], dummyData[3]];
  // data: IProduct[] = [];
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
