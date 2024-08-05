import { Component, Input } from '@angular/core';
import { IData } from '../dummyDataInterfaces';
import { dummyData } from '../dummyData';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../pipes/discount.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, DiscountPipe, StarRatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  // TODO:
  // data!: IData | undefined;
  // ! Fix Later
  data!: any;
  dummyData: IData[] = dummyData;
  @Input() id!: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  counter: number = 0;
  limitExceeded: boolean = false;
  counterIncrement(): void {
    if (this.counter < 3) {
      this.counter += 1;
    }
    if (this.counter >= 3) {
      this.limitExceeded = true;
    }
  }
  counterDecrement(): void {
    this.limitExceeded = false;
    if (this.counter > 0) this.counter -= 1;
  }

  ngOnInit() {
    const routeId = this.activatedRoute.snapshot.params['id'];
    this.data = this.dummyData.find(
      (product) => product.id === Number(routeId),
    );
    if (!this.data) {
      this.router.navigate(['not-found']);
    }
  }
}
