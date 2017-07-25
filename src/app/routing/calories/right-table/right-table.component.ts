import {Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';
import { HttpService } from '../../../shared/servise/http.service';
import {Food} from "../../../shared/food";
import {UserService} from "../../../shared/servise/user.service";

@Component({
  selector: 'app-right-table',
  templateUrl: './right-table.component.html',
  styleUrls: ['./right-table.component.css']
})
export class RightTableComponent implements OnInit, DoCheck {

  // @Input() foods: Food;
  foods: any = [];
  @Output() open = new EventEmitter();

  sumElementov: any = {
    weight: 0,
    roteins: 0,
    fats: 0,
    uglev: 0,
    kKal: 0
  };

  constructor(
    private httpService: HttpService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getFoodAll();
  }

  ngDoCheck() {
    this.updateFoods();
  }

  getFoodAll() {
    this.httpService.getAll().subscribe(resp => {
      this.compareUserId(resp);
    });
  }

  onSelect(selected: any) {
    this.open.emit(selected);
  }

  updateFoods() {
    // this.httpService.getAll().subscribe(resp => this.compareUserId(resp));
  }

  compareUserId(resp) {
    // console.log(resp);
    // console.log('userId - ' + this.userService.currentUser.id);
    resp.forEach(val => {
      if (val.userId == this.userService.currentUser.id) {
        this.foods.push(val);
        for (let i in resp) {
          this.sumElementov.weight  += +resp[i].weight;
          this.sumElementov.roteins += +resp[i].roteins;
          this.sumElementov.fats    += +resp[i].fats;
          this.sumElementov.uglev   += +resp[i].uglev;
          this.sumElementov.kKal    += +resp[i].kKal;
        }
      }
    });
  }
}
