import { Component, Input } from '@angular/core';
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
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  data!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productRequestsService: ProductRequestsService,
  ) {}

  ngOnInit() {
    const routeId = this.activatedRoute.snapshot.params['id'];
    this.productRequestsService
      .getProductDetails(routeId)
      .subscribe((product) => {
        this.data = product;
      });
  }
}
