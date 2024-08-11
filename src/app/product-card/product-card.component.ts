import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../dummyDataInterfaces';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, StarRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  @Output() addedToCartProduct = new EventEmitter<IProduct>();

  isAdded = false;
  onAddingToCart() {
    this.isAdded = true;
    this.addedToCartProduct.emit(this.product);
  }
}
