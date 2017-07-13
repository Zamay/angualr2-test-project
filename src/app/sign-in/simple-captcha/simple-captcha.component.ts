import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-captcha',
  templateUrl: './simple-captcha.component.html',
  styleUrls: ['./simple-captcha.component.css']
})
export class SimpleCaptchaComponent implements OnInit {

  randomNumder: number;
  boolCaptcha: boolean;
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({

      "simpleCaptcha": new FormControl("", [
        Validators.required,
        // Validators.pattern()
      ])
    });
  }

  submit() {
    this.boolCaptcha = false;
    if (this.myForm.value.simpleCaptcha == this.randomNumder) {
     return this.boolCaptcha = true;
    }
  }

  private getRandom() {
    this.randomNumder = Math.floor(Math.random() * 1000000);
  }

  ngOnInit() {
    this.getRandom()
  }

}
