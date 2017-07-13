import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-captcha',
  templateUrl: './simple-captcha.component.html',
  styleUrls: ['./simple-captcha.component.css']
})
export class SimpleCaptchaComponent implements OnInit {

  randomNumder: number;
  boolCaptcha: boolean;

  @Input() captcha: string;
  @Output() captchaChange = new EventEmitter<boolean>();
  onCaptchaChange(model: string) {
    this.boolCaptcha = false;
    this.captcha = model;
    if (+this.captcha == this.randomNumder){
      this.captchaChange.emit(this.boolCaptcha = true);
    }else {
      this.captchaChange.emit(this.boolCaptcha);
    }
    console.log(model);
  }

  private getRandom() {
    this.randomNumder = Math.floor(Math.random() * 1000000);
  }

  ngOnInit() {
    this.getRandom()
  }




}
