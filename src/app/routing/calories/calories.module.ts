import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modal';

import { CaloriesComponent } from './calories.component';
import {CaloriesCreateModule} from "./calories-create/calories-create.module";
import {CaloriesShowModule} from "./calories-show/calories-show.module";
import {CaloriesDetailsModule} from "./calories-details/calories-details.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    CaloriesCreateModule,
    CaloriesShowModule,
    CaloriesDetailsModule,
    RouterModule.forChild([
      { path: 'calories', component: CaloriesComponent }
    ])
  ],
  declarations: [CaloriesComponent],
  exports: [CaloriesComponent]
})
export class CaloriesModule { }
