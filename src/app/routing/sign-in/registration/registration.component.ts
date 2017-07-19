import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SimpleCaptchaService } from '../../../shared/servise/simple-captcha.service';
import { HttpService } from "../../../shared/servise/http.service";

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent implements OnInit {

  random: string;
  reCap: boolean = false;
  regForm: FormGroup;
  loading = false;

  constructor(
    private simpleCaptchaService: SimpleCaptchaService,
    private httpService: HttpService,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.random = '' + this.simpleCaptchaService.getRandom();
  }

  createForm() {
    this.regForm = new FormGroup({

      "name": new FormControl(""),
      "email": new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
      ]),
      "password": new FormControl("", [
        Validators.required
      ])
    });
  }

  reCaptcha(e): boolean {
    const num = e;
    this.reCap = this.simpleCaptchaService.compareValue(this.random, num);
    console.log(this.reCap);
    return this.reCap
  }

  submit() {
    // this.register();
    console.log(this.regForm.value);
  }

  register() {
    this.loading = true;
    this.httpService.create(this.regForm.value)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        });
  }

}
