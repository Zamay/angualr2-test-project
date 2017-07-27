/**
 * Created by Mitya on 27.07.2017.
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolve implements Resolve<any> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.productService.getContact(route.params['id']);
  }
}
