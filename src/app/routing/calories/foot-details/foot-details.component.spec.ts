import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootDetailsComponent } from './foot-details.component';

describe('FootDetailsComponent', () => {
  let component: FootDetailsComponent;
  let fixture: ComponentFixture<FootDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
