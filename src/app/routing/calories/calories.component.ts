import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/servise/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {log} from "util";

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {
  @ViewChild('myModal')
  myModal: any;

  footsForm: FormGroup;
  footForm: FormGroup;
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

  constructor(
    private httpService: HttpService,
    private  router: Router
  ) {
  }

  ngOnInit() {
    this.createForm();
    this.createForm_1();
    this.getFootAll();
    this.sumComponentov();
  }

  createForm() {
    this.footsForm = new FormGroup({

      "name": new FormControl("", [
        Validators.required
      ]),
      "weight": new FormControl("", [
        Validators.required
      ]),
      "roteins": new FormControl("", [
        Validators.required
      ]),
      "fats": new FormControl("", [
        Validators.required
      ]),
      "uglev": new FormControl("", [
        Validators.required
      ]),
      "kKal": new FormControl("", [
        Validators.required
      ])
    });
  }

  createForm_1() {
    this.footForm = new FormGroup({

      "name": new FormControl(this.foot.name, [
        Validators.required
      ]),
      "weight": new FormControl(this.foot.weight, [
        Validators.required
      ]),
      "roteins": new FormControl(this.foot.roteins, [
        Validators.required
      ]),
      "fats": new FormControl(this.foot.fats, [
        Validators.required
      ]),
      "uglev": new FormControl(this.foot.uglev, [
        Validators.required
      ]),
      "kKal": new FormControl(this.foot.kKal, [
        Validators.required
      ])
    });
  }

  submit() {
    this.httpService.create(this.footsForm.value).subscribe((data) => this.foots.push(data));
    this.footsForm.reset();
  }

  onSelect(selected: any) {
    this.footId = selected.id;
    this.showFoot(selected.id);
    this.myModal.open();
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

  showFoot(e): any {
    this.httpService.getById(+e).subscribe((data) => {
      this.foot = data;
      this.createForm_1()
    });
  }

  getFootAll() {
    this.httpService.getAll().subscribe(resp => this.foots = resp);
  }

  updateFoot() {
    this.httpService.update(this.footForm.value, this.footId).subscribe((data) => data);
    alert('Одновление данных завершено')
  }

  deleteFoot() {
    this.httpService.delete(this.footId).subscribe((data) => data);
    alert('Удаленно');
    this.myModal.close();
  }
}
