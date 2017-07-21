import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CaloriesComponent } from "./calories.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FootDetailsModule } from "./foot-details/foot-details.module";
import {ModalModule} from "ngx-modal";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    FootDetailsModule,
    RouterModule.forChild([
      { path: 'calories', component: CaloriesComponent }
    ])
  ],
  declarations: [CaloriesComponent],
  exports: [CaloriesComponent]
})
export class CaloriesModule { }
