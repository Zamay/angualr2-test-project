import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-captcha',
  templateUrl: './simple-captcha.component.html',
  styleUrls: ['./simple-captcha.component.css']
})
export class SimpleCaptchaComponent {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({

      "inputNumber": new FormControl("", [
        Validators.required
      ])
    });
  }

  @Input() captcha: string;

  @Input() reCaptcha: string;
  @Output() onChanged = new EventEmitter<string>();
  change(model: string) {
    this.onChanged.emit(model);
  }

  submit() {
    console.log(this.myForm);
  }

}
