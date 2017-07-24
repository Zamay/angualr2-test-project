import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/servise/index';
import { CaloriesDetailsComponent } from './calories-details/calories-details.component';
// import {log} from "util";

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {

  foods: any = [];
  food: any = {};
  constructor(private httpService: HttpService) {}

  @ViewChild(CaloriesDetailsComponent)
  private detail: CaloriesDetailsComponent;

  ngOnInit() { }

  create(e) {
    console.log(e);
    // this.foods.push(e);
    // or
    this.httpService.create(e).subscribe((data) => this.foods.push(data));
  }

  modal(e) {
    // console.log(e);

    this.food = e;
    this.detail.myModal.open()
  }
}
