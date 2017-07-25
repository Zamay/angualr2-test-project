import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/servise/index';
import { ModalTableComponent } from './modal-table/modal-table.component';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {

  foods: any = [];
  food: any = {};
  constructor(private httpService: HttpService) {}

  @ViewChild(ModalTableComponent)
  private detail: ModalTableComponent;

  ngOnInit() { }

  create(e) {
    console.log(e);
    this.foods.push(e);
  }

  modal(e) {
    this.food = e;
    this.detail.myModal.open()
  }
}
