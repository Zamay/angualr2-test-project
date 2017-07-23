import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesInputComponent } from './calories-input.component';

describe('CaloriesInputComponent', () => {
  let component: CaloriesInputComponent;
  let fixture: ComponentFixture<CaloriesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
