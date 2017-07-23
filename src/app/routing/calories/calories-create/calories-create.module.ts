import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CaloriesCreateComponent} from "./calories-create.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CaloriesCreateComponent],
  exports: [CaloriesCreateComponent]
})
export class CaloriesCreateModule { }
