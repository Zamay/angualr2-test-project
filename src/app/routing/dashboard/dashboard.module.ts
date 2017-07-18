import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboarRoitingdModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { NavbarComponent } from "../../shared/navbar/navbar/navbar.component";

@NgModule({
  imports: [
    CommonModule,
    DashboarRoitingdModule
  ],
  declarations: [DashboardComponent, NavbarComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
