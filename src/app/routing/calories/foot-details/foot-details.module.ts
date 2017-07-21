import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FootDetailsComponent} from "./foot-details.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-modal";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    RouterModule.forChild([
      { path: 'foot/:id', component: FootDetailsComponent }
    ])
  ],
  declarations: [FootDetailsComponent],
  exports: [FootDetailsComponent]
})
export class FootDetailsModule { }
