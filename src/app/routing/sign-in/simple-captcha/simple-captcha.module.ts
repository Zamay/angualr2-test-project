import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SimpleCaptchaComponent} from "./simple-captcha.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [SimpleCaptchaComponent],
  exports: [SimpleCaptchaComponent]
})
export class SimpleCaptchanModule { }
