  import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { HttpService } from '../../shared/servise/http.service';
import { ModalTableComponent } from './modal-table/modal-table.component';
  // import {RightTableComponent} from "./right-table/right-table.component";

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent {

  foods: any = [];
  food: any = {};

  constructor(private httpService: HttpService) {}

  create(e) {
    console.log(e);
    this.foods.push(e);
  }

  modal(e) {
    this.food = e;
    // this.detail.myModal.open()
  }
}
