import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { AuthGuardService } from "../../shared/servise/auth-guard.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'user', component: UserComponent, canActivate: [AuthGuardService] }
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
