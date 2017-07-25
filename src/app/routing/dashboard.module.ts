///<reference path="../shared/servise/user.service.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { CaloriesModule } from "./calories/calories.module";
import { UserModule } from "./user/user.module";
import { SignModule } from "./sign-in/sign.module";
import { HomeModule } from "./home/home.module";
import { UserService } from "../shared/servise/user.service";
import {AuthGuardService} from "../shared/servise/auth-guard.service";

@NgModule({
  imports: [
    CommonModule,
    CaloriesModule,
    UserModule,
    SignModule,
    HomeModule,
    RouterModule.forChild([
      { path: '**', redirectTo: '/home' }
    ])
  ],
  declarations: [
    DashboardComponent,
    NavbarComponent
  ],
  providers: [
    AuthGuardService,
    UserService
    ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
