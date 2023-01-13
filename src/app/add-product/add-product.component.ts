
import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{

  newProduct!: string;


  constructor(private productsService: ProductsService){}

  ngOnInit(){}

  add() {
    const product: Product = ({name: this.newProduct});
    this.productsService.add(product)
    this.newProduct = '';
  }
}
