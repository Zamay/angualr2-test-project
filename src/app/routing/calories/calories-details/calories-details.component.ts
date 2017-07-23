import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpService} from "../../../shared/servise/http.service";

  @Component({
    selector: 'app-calories-details',
    templateUrl: './calories-details.component.html',
  styleUrls: ['./calories-details.component.css']
})
export class CaloriesDetailsComponent implements OnInit {
  @ViewChild('myModal')
  myModal: any;

  foodForm: FormGroup;
  food: any = {};
  foodId: number;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.foodForm = new FormGroup({

      "name": new FormControl(this.food.name, [
        Validators.required
      ]),
      "weight": new FormControl(this.food.weight, [
        Validators.required
      ]),
      "roteins": new FormControl(this.food.roteins, [
        Validators.required
      ]),
      "fats": new FormControl(this.food.fats, [
        Validators.required
      ]),
      "uglev": new FormControl(this.food.uglev, [
        Validators.required
      ]),
      "kKal": new FormControl(this.food.kKal, [
        Validators.required
      ])
    });
  }

  updateFood() {
    this.httpService.update(this.foodForm.value, this.foodId).subscribe((data) => data);
    alert('Одновление данных завершено')
  }

  deleteFood() {
    this.httpService.delete(this.foodId).subscribe((data) => data);
    alert('Удаленно');
    this.myModal.close();
  }
}
