import {Component, Input, OnInit, ViewChild, OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/servise/http.service';
import { Foot } from "../../../shared/foot";
import {log} from "util";

  @Component({
    selector: 'app-modal-table',
    templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css']
})
export class ModalTableComponent implements OnChanges {
  @ViewChild('myModal')
  myModal: any;

  @Input() foodAll: any ;

  foodForm: FormGroup;
  foodId: number;
  food: any = {
    name: 'User',
    weight: 0,
    roteins: 0,
    fats: 0,
    uglev: 0,
    kKal: 0
  };

  constructor(private httpService: HttpService) {
    this.createForm();
  }

  ngOnChanges() {
    this.foodId = this.foodAll.id;
    this.getFood();
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

  getFood() {
    this.httpService.getById(this.foodId).subscribe((data) => { this.food = data; this.createForm() });
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
