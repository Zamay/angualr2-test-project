import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimpleCaptchaService } from '../../shared/servise/simple-captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({

      "userEmail": new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
      ]),
      "userPass": new FormControl("", [
        Validators.required
      ])
    });
  }

  submit() {
    console.log(this.myForm);
  }

}
