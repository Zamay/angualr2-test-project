import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProductService } from './product.service';
import {MockProductService} from "./mock-product.service";

@Injectable()
export class ProductResolve implements Resolve<any> {

  constructor(private mockProductService: MockProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.mockProductService.getProductById(route.params['id']);
  }
}
