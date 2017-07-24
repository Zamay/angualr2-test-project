import {Component, Input, OnInit, ViewChild, OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/servise/http.service';

  @Component({
    selector: 'app-modal-table',
    templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css']
})
export class ModalTableComponent implements OnChanges {
  @ViewChild('myModal')
  myModal: any;

  @Input() food: any ;

  foodForm: FormGroup;
  foodId: number;

  constructor(private httpService: HttpService) { }

  ngOnChanges() {
    this.createForm();
    this.foodId = this.food.id;
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
