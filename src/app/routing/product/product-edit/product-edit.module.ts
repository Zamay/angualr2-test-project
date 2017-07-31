import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductEditComponent} from "./product-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ProductEditComponent],
  exports: [ProductEditComponent]
})
export class ProductEditModule { }
