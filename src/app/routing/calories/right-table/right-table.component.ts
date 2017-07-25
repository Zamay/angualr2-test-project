import {Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';
import { HttpService } from '../../../shared/servise/http.service';
import {Food} from "../../../shared/food";

@Component({
  selector: 'app-right-table',
  templateUrl: './right-table.component.html',
  styleUrls: ['./right-table.component.css']
})
export class RightTableComponent implements OnInit, DoCheck {

  @Input() foods: Food;
  @Output() open = new EventEmitter();

  sumElementov: any = {
    weight: 0,
    roteins: 0,
    fats: 0,
    uglev: 0,
    kKal: 0
  };

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getFoodAll();
  }

  ngDoCheck() {
    this.updateFoods();
  }

  getFoodAll() {
    this.httpService.getAll().subscribe(resp => {
      this.foods = resp;
      for (let i in resp) {
        this.sumElementov.weight  += +resp[i].weight;
        this.sumElementov.roteins += +resp[i].roteins;
        this.sumElementov.fats    += +resp[i].fats;
        this.sumElementov.uglev   += +resp[i].uglev;
        this.sumElementov.kKal    += +resp[i].kKal;
      }
    });
  }

  onSelect(selected: any) {
    this.open.emit(selected);
  }

  updateFoods() {
    this.httpService.getAll().subscribe(resp => this.foods = resp);
  }


}
