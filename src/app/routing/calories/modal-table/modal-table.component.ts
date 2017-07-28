import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { HttpService } from '../../../shared/servise/http.service';
import { UserService } from '../../../shared/servise/user.service';
import { Food } from '../../../shared/food';
import { User } from '../../../shared/user';
import {Toast, ToasterConfig, ToasterService} from "angular2-toaster";

@Component({
  selector:    'app-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls:  ['./modal-table.component.css']
})
export class ModalTableComponent implements OnChanges {
  @ViewChild('myModal')
  myModal: any;

  @Input() foodAll: Food;
  @Output() save = new EventEmitter();
  @Output() delete = new EventEmitter();

  currentUser: User;
  foodForm: FormGroup;
  food: Food;

  constructor(
    private httpService: HttpService,
    private toasterService: ToasterService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.foodAll === undefined ) {
      this.food = {
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
    this.httpService.getById(this.foodAll.id)
      .subscribe((data) => {
      this.food = data;
      this.createForm();
    });
  }

  // start toaster
  config1:  ToasterConfig = new ToasterConfig({
    positionClass: 'toast-bottom-right'
  });

  popToast(str) {
    var toast: Toast = {
      type: 'info',
      title: 'Успешно',
      body: str
    };

    this.toasterService.pop(toast);
  }
  // end toaster

  updateFood() {
    this.httpService.update(this.foodForm.value, this.foodAll.id)
      .subscribe((data) => this.save.emit(data));
    this.popToast('Одновление данных');
    this.myModal.close();
  }

  deleteFood() {
    this.httpService.delete(this.foodAll.id)
      .subscribe((data) => this.delete.emit(data));
    this.popToast('Удаление данных');
    this.myModal.close();
  }
}
