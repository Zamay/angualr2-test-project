import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesDetailsComponent } from './calories-details.component';

describe('CaloriesDetailsComponent', () => {
  let component: CaloriesDetailsComponent;
  let fixture: ComponentFixture<CaloriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
