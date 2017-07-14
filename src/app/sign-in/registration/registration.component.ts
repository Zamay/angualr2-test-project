import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimpleCaptchaService } from '../../shared/servise/simple-captcha.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  random: string;
  reCap: boolean = false;
  myForm: FormGroup;

  constructor(private simpleCaptchaService: SimpleCaptchaService ) {

    this.myForm = new FormGroup({

      "userName": new FormControl("User"),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
      ]),
      "userPass": new FormControl("", [
        Validators.required
      ])
    });
  }

  ngOnInit() {
    this.random = '' + this.simpleCaptchaService.getRandom();
  }

  reCaptcha(e): boolean {
    const inputNumber = e;
    this.reCap = this.simpleCaptchaService.compareValue(this.random, inputNumber.target.value);
    console.log(this.reCap);
    return this.reCap
  }

  submit() {
    console.log(this.myForm);
  }

}
