import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from "./sign.component";
import { RouterModule } from "@angular/router";
import {LoginModule} from "./login/login.module";
import {RegistrationModule} from "./registration/registration.module";

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RegistrationModule,
    RouterModule.forChild([
      { path: 'sign', component: SignComponent }
    ])
  ],
  declarations: [SignComponent],
  exports: [SignComponent]
})
export class SignModule { }
