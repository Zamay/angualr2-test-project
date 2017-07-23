import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CaloriesInputComponent} from "./calories-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CaloriesInputComponent],
  exports: [CaloriesInputComponent]
})
export class CaloriesInputModule { }
