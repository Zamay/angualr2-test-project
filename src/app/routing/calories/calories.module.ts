import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modal';

import { CaloriesComponent } from './calories.component';
import {LeftTableModule} from "./left-table/left-table.module";
import {RightTableModule} from "./right-table/right-table.module";
import {ModalTableModule} from "./modal-table/modal-table.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    LeftTableModule,
    RightTableModule,
    ModalTableModule,
    RouterModule.forChild([
      { path: 'calories', component: CaloriesComponent }
    ])
  ],
  declarations: [CaloriesComponent],
  exports: [CaloriesComponent]
})
export class CaloriesModule { }
