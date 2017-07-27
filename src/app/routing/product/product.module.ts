import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductRoutes} from "./product.routes";
import {ProductDetailModule} from "./product-detail/product-detail.module";
import {ProductListModule} from "./product-list/product-list.module";
import {BrowserModule} from "@angular/platform-browser";
import {ProductService} from "./product.service";
import {ProductResolve} from "./product.resolve";
import {ProductComponent} from "./product.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ProductListModule,
    ProductDetailModule,
    RouterModule.forRoot(ProductRoutes)
  ],
  declarations: [ProductComponent],
  providers: [
    ProductService,
    ProductResolve
  ],
  exports: [ProductComponent]
})
export class ProductModule {
}
