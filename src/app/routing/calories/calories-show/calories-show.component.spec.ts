import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesShowComponent } from './calories-show.component';

describe('CaloriesShowComponent', () => {
  let component: CaloriesShowComponent;
  let fixture: ComponentFixture<CaloriesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
