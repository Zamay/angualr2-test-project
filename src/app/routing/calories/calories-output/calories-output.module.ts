import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaloriesOutputComponent } from "./calories-output.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CaloriesOutputComponent],
  exports: [CaloriesOutputComponent]
})
export class CaloriesOutputModule { }
