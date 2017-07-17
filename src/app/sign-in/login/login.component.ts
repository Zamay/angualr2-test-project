import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimpleCaptchaService } from '../../shared/servise/simple-captcha.service';
import { AuthenticationService } from "../../shared/servise/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  random: string;
  reCap: boolean = false;
  loading = false;
  loginForm: FormGroup;
  currentUser: any;

  constructor(
    private simpleCaptchaService: SimpleCaptchaService,
    private authenticationService: AuthenticationService,
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
    this.login();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.loginForm.value)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        });
  }

}
