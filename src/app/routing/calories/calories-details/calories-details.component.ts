import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpService} from "../../../shared/servise/http.service";

  @Component({
    selector: 'app-calories-details',
    templateUrl: './calories-details.component.html',
  styleUrls: ['./calories-details.component.css']
})
export class CaloriesDetailsComponent implements OnInit {
  @ViewChild('myModal')
  myModal: any;

  footForm: FormGroup;
  foot: any = {};
  footId: number;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
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
