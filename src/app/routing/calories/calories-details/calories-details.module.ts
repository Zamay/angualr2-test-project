import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CaloriesDetailsComponent} from "./calories-details.component";
import {ModalModule} from "ngx-modal";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
  ],
  declarations: [CaloriesDetailsComponent],
  exports: [CaloriesDetailsComponent]
})
export class CaloriesDetailsModule { }
