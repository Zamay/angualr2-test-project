  import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { HttpService } from '../../shared/servise/http.service';
import { ModalTableComponent } from './modal-table/modal-table.component';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent {

  foods: any = [];
  food: any = {};

  @ViewChild(ModalTableComponent)
  private detail: ModalTableComponent;

  constructor(private httpService: HttpService) {}

  create(e) {
    console.log(e);
    this.foods.push(e);
  }

  update(e) {

  }

  modal(e) {
    this.food = e;
    this.detail.myModal.open()
  }
}
