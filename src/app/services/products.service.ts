import { Product } from '../interface/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsList: Array<Product> = [];
  private productsBought: Array<Product> = [];

  private productsListObs = new BehaviorSubject<Array<Product>>([]);
  private productsBoughtObs = new BehaviorSubject<Array<Product>>([]);

  constructor() {
    this.productsList = [
      {name: 'Eggs'},
      {name: 'Flour'},
      {name: 'Milk'},
      {name: 'Oat flakes'}];
    this.productsListObs.next(this.productsList);
  }

  add(product: Product) {
    this.productsList.push(product);
    this.productsListObs.next(this.productsList);
  }

  done(product: Product) {
    this.productsBought.push(product);
    this.remove(product);
    this.productsBoughtObs.next(this.productsBought);
  }

  remove(product: Product) {
    this.productsList = this.productsList.filter( el => el !== product);
    this.productsListObs.next(this.productsList);
  }

  getProductsBoughtObs(): Observable<Array<Product>>{
    return this.productsBoughtObs.asObservable();
  }

  getProductsListObs(): Observable<Array<Product>>{
    return this.productsListObs.asObservable();
  }
}

