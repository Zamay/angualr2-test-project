import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-captcha',
  templateUrl: 'simple-captcha.component.html',
  styleUrls: ['simple-captcha.component.css']
})
export class SimpleCaptchaComponent {

  myForm: FormGroup;
  constructor() {
    this.createForm();
    this.logNameChange();
  }

  @Input() captcha: string;

  @Output() onChanged = new EventEmitter<string>();

  createForm() {
    this.myForm = new FormGroup({

      'inputNumber': new FormControl('', [
        Validators.required
      ])
    });
  }

  logNameChange() {
    const nameControl = this.myForm.get('inputNumber'); // [object Object]
    nameControl.valueChanges.forEach(
      (value: string) => this.onChanged.emit(value)
    );
  }

  submit() {
    console.log(this.myForm);
  }

}
