import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/servise/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calories-input',
  templateUrl: './calories-input.component.html',
  styleUrls: ['./calories-input.component.css']
})
export class CaloriesInputComponent implements OnInit {

  footsForm: FormGroup;
  foots: any = [];
  sumElementov: any = {
    weight: 0,
    roteins: 0,
    fats: 0,
    uglev: 0,
    kKal: 0
  };

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.createForm();
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

  submit() {
    this.httpService.create(this.footsForm.value).subscribe((data) => this.foots.push(data));
    this.footsForm.reset();
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
}
