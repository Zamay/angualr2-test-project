import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductRoutes} from "./product.routes";
import {BrowserModule} from "@angular/platform-browser";
import {ProductComponent} from "./product.component";
import {RecipeModule} from "./recipes/recipe.module";

@NgModule({
  imports: [
    CommonModule,
    RecipeModule,
    BrowserModule,
    RouterModule.forRoot(ProductRoutes)
  ],
  declarations: [ProductComponent],
  providers: [],
  exports: [ProductComponent]
})
export class ProductModule {
}
