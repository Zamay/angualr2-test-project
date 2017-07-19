import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from './routing/sign-in/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationModule } from './routing/sign-in/registration/registration.module';
import { SimpleCaptchaService } from './shared/servise/simple-captcha.service';
import { HttpService } from "./shared/servise/http.service";
import { HttpModule } from "@angular/http";
import { AuthenticationService } from "./shared/servise/authentication.service";
import { UserModule } from "./routing/user/user.module";
import { DashboardModule } from "./routing/dashboard/dashboard.module";
import { SignModule } from "./routing/sign-in/sign.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UserModule,
    SignModule,
    DashboardModule,
    RegistrationModule,
    RouterModule,
    HttpModule
  ],
  providers: [
    SimpleCaptchaService,
    HttpService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
