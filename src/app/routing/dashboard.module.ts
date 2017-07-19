import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { CaloriesModule } from "./calories/calories.module";
import { UserModule } from "./user/user.module";
import {SignModule} from "./sign-in/sign.module";

@NgModule({
  imports: [
    CommonModule,
    CaloriesModule,
    UserModule,
    SignModule,
    RouterModule.forChild([
      { path: 'dashboard', component: DashboardComponent }
    ])
  ],
  declarations: [DashboardComponent, NavbarComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
