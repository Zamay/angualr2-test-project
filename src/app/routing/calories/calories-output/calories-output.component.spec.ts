import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesOutputComponent } from './calories-output.component';

describe('CaloriesOutputComponent', () => {
  let component: CaloriesOutputComponent;
  let fixture: ComponentFixture<CaloriesOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
