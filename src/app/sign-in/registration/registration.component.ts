import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimpleCaptchaService } from '../../shared/servise/simple-captcha.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  randNumber: number;
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
    this.randNumber = this.simpleCaptchaService.getRandom();
  }

  submit() {
    console.log(this.myForm.value);
  }
}
