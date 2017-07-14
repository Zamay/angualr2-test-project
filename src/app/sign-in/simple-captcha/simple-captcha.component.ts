import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-simple-captcha',
  templateUrl: './simple-captcha.component.html',
  styleUrls: ['./simple-captcha.component.css']
})
export class SimpleCaptchaComponent implements OnChanges {

  @Input() captcha: string;

  @Input() reCaptcha: string;
  @Output() reCaptchaChange = new EventEmitter<string>();
  onChange(model: string) {

    this.reCaptcha = model;
    this.reCaptchaChange.emit(model);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

}
