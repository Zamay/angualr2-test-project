import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-captcha',
  templateUrl: 'simple-captcha.component.html',
  styleUrls: ['simple-captcha.component.css']
})
export class SimpleCaptchaComponent {

  a: boolean = false;
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
        Validators.required,
        Validators.pattern("^[0-9]{5,6}")
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
