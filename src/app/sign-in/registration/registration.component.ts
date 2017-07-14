import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimpleCaptchaService } from '../../shared/servise/simple-captcha.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnChanges {

  random: string;
  reCaptcha: string;
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

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue1 = ${cur}, previousValue1 = ${prev}`);
    }
  }

}
