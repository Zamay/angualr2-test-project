import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modal';

import { CaloriesComponent } from './calories.component';
import {CaloriesInputModule} from "./calories-input/calories-input.module";
import {CaloriesOutputModule} from "./calories-output/calories-output.module";
import {CaloriesDetailsModule} from "./calories-details/calories-details.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    CaloriesInputModule,
    CaloriesOutputModule,
    CaloriesDetailsModule,
    RouterModule.forChild([
      { path: 'calories', component: CaloriesComponent }
    ])
  ],
  declarations: [CaloriesComponent],
  exports: [CaloriesComponent]
})
export class CaloriesModule { }
