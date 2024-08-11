import { Component, Input } from '@angular/core';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { IReview } from '../../dummyDataInterfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [StarRatingComponent, CommonModule],
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.css',
})
export class ProductReviewsComponent {
  @Input() review!: IReview;
}
