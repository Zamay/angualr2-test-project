import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/servise/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calories-create',
  templateUrl: './calories-create.component.html',
  styleUrls: ['./calories-create.component.css']
})
export class CaloriesCreateComponent implements OnInit {

  foodsForm: FormGroup;

  constructor(private httpService: HttpService) {}

  @Output() add = new EventEmitter();

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

  onSubmit() {
    // this.httpService.create(this.foodsForm.value).subscribe((data) => (data));
    // or
    this.add.emit(this.foodsForm.value);
    this.foodsForm.reset();
  }
}
