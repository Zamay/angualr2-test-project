import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './routing/dashboard.module';
import { HttpService, AuthenticationService, SimpleCaptchaService } from './shared/servise/index';
import {WeatherTestService} from "./shared/servise/weather-test.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    RouterModule,
    HttpModule
  ],
  providers: [
    SimpleCaptchaService,
    HttpService,
    AuthenticationService,
    WeatherTestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
