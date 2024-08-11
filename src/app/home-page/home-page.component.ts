import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { IProductRequest } from '../dummyDataInterfaces';
import { dummyData } from '../dummyData';
import { ProductRequestsService } from '../services/product-requests.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  products: any;

  constructor(private productRequestsService: ProductRequestsService) {}

  ngOnInit() {
    this.productRequestsService
      .getProductsList()
      .subscribe((data: IProductRequest) => {
        this.products = data.products;
      });
  }
}
