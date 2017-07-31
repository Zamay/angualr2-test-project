import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "./product-list.component";
import {RouterModule} from "@angular/router";
import {LoadersCssModule} from "angular2-loaders-css";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadersCssModule,
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent]
})
export class ProductListModule {
}
