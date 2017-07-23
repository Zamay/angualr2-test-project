import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/servise/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calories-input',
  templateUrl: './calories-create.component.html',
  styleUrls: ['./calories-create.component.css']
})
export class CaloriesCreateComponent implements OnInit {

  foodsForm: FormGroup;
  foods: any = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.foodsForm = new FormGroup({

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

  submit() {
    this.httpService.create(this.foodsForm.value).subscribe((data) => this.foods.push(data));
    this.foodsForm.reset();
  }
}
