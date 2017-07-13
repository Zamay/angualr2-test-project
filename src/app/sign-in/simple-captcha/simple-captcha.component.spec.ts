import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCaptchaComponent } from './simple-captcha.component';

describe('SimpleCaptchaComponent', () => {
  let component: SimpleCaptchaComponent;
  let fixture: ComponentFixture<SimpleCaptchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCaptchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
