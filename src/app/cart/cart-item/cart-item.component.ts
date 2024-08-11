import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { CartItem } from '../../services/cart.service';
import { IProduct } from '../../dummyDataInterfaces';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() data!: IProduct;
}
