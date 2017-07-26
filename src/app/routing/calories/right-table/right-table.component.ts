import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  DoCheck,
  OnChanges, Input
} from '@angular/core';

import { HttpService } from '../../../shared/servise/http.service';
import {User} from '../../../shared/user';

@Component({
  selector: 'app-right-table',
  templateUrl: './right-table.component.html',
  styleUrls: ['./right-table.component.css']
})
export class RightTableComponent implements OnChanges {

  @Input() foods: any = [];
  @Output() open = new EventEmitter();

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
  }

  ngOnChanges() {
    this.updateFoods();
  }

  onSelect(selected: any) {
    this.open.emit(selected);
  }

  updateFoods() {
    this.httpService.getAll().subscribe(resp => this.compareUserId(resp));
  }

  compareUserId(resp) {
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
}
