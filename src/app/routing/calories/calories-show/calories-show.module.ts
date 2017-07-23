import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaloriesShowComponent } from "./calories-show.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CaloriesShowComponent],
  exports: [CaloriesShowComponent]
})
export class CaloriesShowModule { }
