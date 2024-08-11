import { CartItem, CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { IUrl, urlsList } from '../../routes/routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  urls: IUrl[] = urlsList;
  cartItems: CartItem[] = [];
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getItems().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalQuantity();
    });
  }
  calculateTotalQuantity(): void {
    this.totalQuantity = this.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    );
  }
}
