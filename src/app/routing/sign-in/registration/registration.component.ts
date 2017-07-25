import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SimpleCaptchaService } from '../../../shared/servise/simple-captcha.service';
import {UserService} from "../../../shared/servise/user.service";

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
    private userService: UserService,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.random = '' + this.simpleCaptchaService.getRandom();
  }

  createForm() {
    this.regForm = new FormGroup({

      "name": new FormControl("", [
        Validators.required,
        // Validators.pattern("^[a-zA-Z]{2,20}")
      ]),
      "email": new FormControl("", [
        Validators.required,
        // Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
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
    this.userService.createUser(this.regForm.value);
  }

}
