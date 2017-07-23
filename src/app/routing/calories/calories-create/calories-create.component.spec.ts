import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesCreateComponent } from './calories-create.component';

describe('CaloriesCreateComponent', () => {
  let component: CaloriesCreateComponent;
  let fixture: ComponentFixture<CaloriesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
