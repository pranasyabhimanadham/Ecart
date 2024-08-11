import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { IProduct, IProductRequest } from '../dummyDataInterfaces';
import { ProductRequestsService } from '../services/product-requests.service';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  products: any;
  items: CartItem[] = [];

  constructor(
    private productRequestsService: ProductRequestsService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.productRequestsService
      .getProductsList()
      .subscribe((data: IProductRequest) => {
        this.products = data.products;
      });

    this.cartService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  onAddToCart(product: IProduct) {
    const quantity: number = 1;
    this.cartService.addToCart(product, quantity);
  }
}
