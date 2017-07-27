import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightTableComponent } from "./right-table.component";
import {ModalTableModule} from "../modal-table/modal-table.module";

@NgModule({
  imports: [
    CommonModule,
    ModalTableModule
  ],
  declarations: [RightTableComponent],
  exports: [RightTableComponent]
})
export class RightTableModule { }
