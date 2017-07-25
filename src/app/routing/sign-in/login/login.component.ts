import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SimpleCaptchaService } from "../../../shared/servise/simple-captcha.service";
import { UserService } from "../../../shared/servise/user.service";


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {
  random: string;
  reCap: boolean = false;
  loginForm: FormGroup;
  currentUser: any;

  constructor(
    private simpleCaptchaService: SimpleCaptchaService,
    private userService: UserService,
    private router: Router
  ) {
    this.createForm();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.random = '' + this.simpleCaptchaService.getRandom();
  }

  createForm() {
    this.loginForm = new FormGroup({

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

  // Вход
  submit() {
    this.userService.login(this.loginForm.value)
    if (this.userService.isLoggedIn) {

    }
  }
}

