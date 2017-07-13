import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from './sign-in/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationModule } from './sign-in/registration/registration.module';
import { SimpleCaptchaService } from './shared/servise/simple-captcha.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    RouterModule
  ],
  providers: [SimpleCaptchaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
