import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CaloriesComponent } from "./calories.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'calories', component: CaloriesComponent }
    ])
  ],
  declarations: [CaloriesComponent],
  exports: [CaloriesComponent]
})
export class CaloriesModule { }
