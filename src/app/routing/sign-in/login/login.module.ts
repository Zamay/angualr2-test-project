import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from '../login/login-routing.module';
import { SimpleCaptchanModule } from "../simple-captcha/simple-captcha.module";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule ,
    ReactiveFormsModule,
    FormsModule,
    SimpleCaptchanModule

  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
