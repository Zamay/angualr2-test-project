import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimpleCaptchaService } from '../../shared/servise/simple-captcha.service';
import { HttpService } from "../../shared/servise/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
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

      "name": new FormControl("User"),
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
    this.register();
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
