import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductRoutes} from './product.routes';
import {ProductDetailModule} from './product-detail/product-detail.module';
import {ProductListModule} from './product-list/product-list.module';
import {BrowserModule} from '@angular/platform-browser';
import {ProductService} from './product.service';
import {ProductResolve} from './product.resolve';
import {ProductComponent} from './product.component';
import {ProductStartComponent} from "app/routing/product/product-start/product-start.component";
import { ProductEditComponent } from './product-edit/product-edit.component';
import {ProductEditModule} from "./product-edit/product-edit.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ProductListModule,
    ProductEditModule,
    ProductDetailModule,
    RouterModule.forRoot(ProductRoutes)
  ],
  declarations: [ProductComponent, ProductStartComponent],
  providers: [
    ProductService,
    ProductResolve
  ],
  exports: [ProductComponent]
})
export class ProductModule {
}
