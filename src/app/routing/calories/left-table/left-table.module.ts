import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftTableComponent} from "./left-table.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LeftTableComponent],
  exports: [LeftTableComponent]
})
export class LeftTableModule { }
