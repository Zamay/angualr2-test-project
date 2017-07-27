import {
  Component,
  Input,
  ViewChild
} from '@angular/core';

import { HttpService } from '../../../shared/servise/http.service';
import { User } from '../../../shared/user';
import { ModalTableComponent } from '../modal-table/modal-table.component';

@Component({
  selector: 'app-right-table',
  templateUrl: './right-table.component.html',
  styleUrls: ['./right-table.component.css']
})
export class RightTableComponent {
  food: any = {};
  @Input() foods: any = [];

  @ViewChild(ModalTableComponent)
  private detail: ModalTableComponent;

  currentUser: User;
  sumElementov: any = {
    weight: 0,
    roteins: 0,
    fats: 0,
    uglev: 0,
    kKal: 0
  };

  constructor(private httpService: HttpService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.httpService.getAll().subscribe(resp => this.compareId(resp));
  }

  onSelect(selected: any) {
    this.food = selected;
    this.detail.myModal.open();
  }

  updateFoods() {
    this.httpService.getAll().subscribe(resp => this.compareUserId(resp));
  }

  // мда....
  compareUserId(resp) {
    this.foods = [];
    this.sumElementov = {
      weight: 0,
      roteins: 0,
      fats: 0,
      uglev: 0,
      kKal: 0
    };
    resp.forEach(val => {
      if (val.userId == this.currentUser.id) {
        this.foods.push(val);

        // TODO: попробовать сделать через деструктуризацию
        this.sumElementov.weight  += val.weight;
        this.sumElementov.roteins += val.roteins;
        this.sumElementov.fats    += val.fats;
        this.sumElementov.uglev   += val.uglev;
        this.sumElementov.kKal    += val.kKal;
      }
    });
  }
  // тоже самое что и compareUserId
  compareId(resp) {
    resp.forEach(val => {
      if (val.userId == this.currentUser.id) {
        this.foods.push(val);

        // TODO: попробовать сделать через деструктуризацию
        this.sumElementov.weight  += val.weight;
        this.sumElementov.roteins += val.roteins;
        this.sumElementov.fats    += val.fats;
        this.sumElementov.uglev   += val.uglev;
        this.sumElementov.kKal    += val.kKal;
      }
    });
  }

//

  update(e) {
    console.log(e);
    this.updateFoods();
  }

  delete(e) {
    console.log(e);
    this.updateFoods();
  }
}
