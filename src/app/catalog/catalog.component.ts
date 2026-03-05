import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 1,
      description: 'A robot that can clean your house.',
      name: 'RoboVac',
      imageName: 'robovac.jpg',
      category: 'Home Appliances',
      price: 299.99,
      discount: 20
    };
  }

  getImageUrl(product: IProduct): string {
    return `assets/images/robot-parts/head-friendly.png`;
  }
}
