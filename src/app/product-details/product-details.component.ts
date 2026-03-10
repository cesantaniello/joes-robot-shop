import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

  getImageUrl(product: IProduct): string {
    return `assets/images/robot-parts/${product.imageName}`;
  }

  addToCart(product: IProduct) {
    // Implementation for adding product to cart
  }
}
