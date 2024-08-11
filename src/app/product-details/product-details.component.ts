import { CartItem, CartService } from './../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../dummyDataInterfaces';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../pipes/discount.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductRequestsService } from '../services/product-requests.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    DiscountPipe,
    StarRatingComponent,
    ProductReviewsComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  data!: IProduct;
  cartItems: CartItem[] = [];
  quantity: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productRequestsService: ProductRequestsService,
    private cartService: CartService,
  ) {}

  onAddToCart() {
    this.cartService.addToCart(this.data, this.quantity);
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.cartService.updateQuantity(this.data.id, this.quantity);
    }
  }

  increaseQuantity() {
    if (this.quantity < this.data.stock) {
      this.quantity++;
      this.cartService.updateQuantity(this.data.id, this.quantity);
    }
  }

  ngOnInit() {
    const routeId = this.activatedRoute.snapshot.params['id'];
    this.productRequestsService
      .getProductDetails(routeId)
      .subscribe((product: any) => {
        this.data = product;
        this.quantity = this.cartService.getQuantity(this.data.id);
      });

    this.cartService.getItems().subscribe((items) => {
      this.cartItems = items;
    });
  }
}
