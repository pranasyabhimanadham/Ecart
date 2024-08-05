import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgFor],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() totalStars: number = 5;

  get stars() {
    const filledCount = Math.round(this.rating);
    const emptyCount = this.totalStars - filledCount;
    return {
      filled: filledCount,
      empty: emptyCount,
    };
  }
}
