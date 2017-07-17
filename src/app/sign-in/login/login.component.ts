import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimpleCaptchaService } from '../../shared/servise/simple-captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  random: string;
  reCap: boolean = false;

  loginForm: FormGroup;
  constructor(private simpleCaptchaService: SimpleCaptchaService ) {
    this.createForm()
  }

  ngOnInit() {
    this.random = '' + this.simpleCaptchaService.getRandom();
  }

  createForm() {
    this.loginForm = new FormGroup({

      "userEmail": new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
      ]),
      "userPass": new FormControl("", [
        Validators.required
      ])
    });
  }

  reCaptcha(e): boolean {
    const inputNumber = e;
    this.reCap = this.simpleCaptchaService.compareValue(this.random, inputNumber.target.value);
    console.log(this.reCap);
    return this.reCap
  }

  submit() {
    console.log(this.loginForm);
  }

}
