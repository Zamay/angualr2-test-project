import {Component, Input, OnInit, ViewChild, OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/servise/http.service';
import { Foot } from '../../../shared/foot';

  @Component({
    selector: 'app-modal-table',
    templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css']
})
export class ModalTableComponent implements OnChanges {
  @ViewChild('myModal')
  myModal: any;

  @Input() foodAll: Foot;

  foodForm: FormGroup;
  food: Foot;

  constructor(private httpService: HttpService) {

    if (this.foodAll === undefined ) {
      this.foodAll = {
        id: 1,
        name: '',
        weight: 0,
        roteins: 0,
        fats: 0,
        uglev: 0,
        kKal: 0
      }
    }
    this.createForm();
  }

  ngOnChanges() {
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
    this.httpService.getById(this.foodAll.id).subscribe((data) => { this.food = data; this.createForm() });
  }

  updateFood() {
    this.httpService.update(this.foodForm.value, this.foodAll.id).subscribe((data) => data);
    alert('Одновление данных завершено')
  }

  deleteFood() {
    this.httpService.delete(this.foodAll.id).subscribe((data) => data);
    alert('Удаленно');
    this.myModal.close();
  }
}
