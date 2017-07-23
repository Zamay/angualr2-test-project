import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/servise/http.service';

@Component({
  selector: 'app-calories-output',
  templateUrl: './calories-output.component.html',
  styleUrls: ['./calories-output.component.css']
})
export class CaloriesOutputComponent implements OnInit {

  foots: any = [];
  foot: any = {};
  footId: number;
  sumElementov: any = {
    weight: 0,
    roteins: 0,
    fats: 0,
    uglev: 0,
    kKal: 0
  };

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getFootAll();
    this.sumComponentov();
  }

  getFootAll() {
    this.httpService.getAll().subscribe(resp => this.foots = resp);
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
    this.footId = selected.id;
    this.showFoot(selected.id);
    // this.myModal.open();
  }

  showFoot(e): any {
    this.httpService.getById(+e).subscribe((data) => {
      this.foot = data;
    });
  }

}
