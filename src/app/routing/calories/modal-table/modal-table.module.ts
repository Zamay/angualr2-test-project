import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalTableComponent} from "./modal-table.component";
import {ModalModule} from "ngx-modal";
import {ToasterModule} from "angular2-toaster";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    ToasterModule,
    BrowserAnimationsModule,
  ],
  declarations: [ModalTableComponent],
  exports: [ModalTableComponent]
})
export class ModalTableModule { }
