
import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-tobuy-product',
  templateUrl: './tobuy-product.component.html',
  styleUrls: ['./tobuy-product.component.scss'],
})
export class TobuyProductComponent implements OnInit{

  productsList: Array<Product> = [];

  constructor(private productsService: ProductsService){
    this.productsService.getProductsListObs().subscribe((products: Array<Product>) => {
      this.productsList = products.slice();
    });
  }

  ngOnInit() {}

  bought(product: Product) {
    this.productsService.done(product);
  }

  remove(product: Product) {
    this.productsService.remove(product);
  }

  getColor(): string {
    return this.productsList.length >= 5 ? 'red' : 'green';
  }
}
