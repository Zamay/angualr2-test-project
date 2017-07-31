import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {ModalModule} from "ngx-modal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoadersCssModule } from 'angular2-loaders-css';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
