import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product';


@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: Array<Product>, ...args: any): Array<Product> {
    return value.sort((a, b) => {
      if(a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    })
  }

}
