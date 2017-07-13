import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-captcha',
  templateUrl: './simple-captcha.component.html',
  styleUrls: ['./simple-captcha.component.css']
})
export class SimpleCaptchaComponent implements OnInit {

  captcha: string;

  @Input() randomNumber: string;
  @Output() captchaChange = new EventEmitter<string>();
  onCaptchaChange(model: string) {
    this.randomNumber = model;
    this.captchaChange.emit(model);
    console.log(model);
  }

  ngOnInit() {
   this.captcha =  this.randomNumber;
  }



}
