import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightTableComponent } from "./right-table.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RightTableComponent],
  exports: [RightTableComponent]
})
export class RightTableModule { }
