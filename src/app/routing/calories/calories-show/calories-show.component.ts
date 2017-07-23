import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/servise/http.service';

@Component({
  selector: 'app-calories-output',
  templateUrl: './calories-show.component.html',
  styleUrls: ['./calories-show.component.css']
})
export class CaloriesShowComponent implements OnInit {

  foods: any = [];
  food: any = {};
  foodId: number;
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
    this.sumComponentov();
  }

  getFoodAll() {
    this.httpService.getAll().subscribe(resp => this.foods = resp);
  }

  sumComponentov() {
    this.httpService.getAll().subscribe(resp => {
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
    this.foodId = selected.id;
    this.showFoot(selected.id);
    // this.myModal.open();
  }

  showFoot(e): any {
    this.httpService.getById(+e).subscribe((data) => {
      this.food = data;
    });
  }

}
