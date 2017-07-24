import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalTableComponent} from "./modal-table.component";
import {ModalModule} from "ngx-modal";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
  ],
  declarations: [ModalTableComponent],
  exports: [ModalTableComponent]
})
export class ModalTableModule { }
