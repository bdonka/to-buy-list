import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-bought-product',
  templateUrl: './bought-product.component.html',
  styleUrls: ['./bought-product.component.scss']
})
export class BoughtProductComponent implements OnInit{

  @Input() productsBought: Array<Product> = [];

  constructor(private productsService: ProductsService){
    this.productsService.getProductsBoughtObs().subscribe((products: Array<Product>) => {
      this.productsBought = products;
    });
  }

  ngOnInit(){}
}
