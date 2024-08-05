import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { IData } from '../dummyDataInterfaces';
import { dummyData } from '../dummyData';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  products: IData[];

  constructor() {
    this.products = dummyData;
  }
}
