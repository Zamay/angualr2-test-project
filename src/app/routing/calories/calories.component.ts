import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/servise/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {

  footsForm: FormGroup;
  foots: any = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.createForm();
    this.httpService.getAll().subscribe(resp => this.foots = resp);
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

  submit() {
    // this.login();
    console.log(this.footsForm.value);
  }
  // onSelect(selected: any) {
  //   this.router.navigate(["phonebook", selected.id]);
  // }
}
