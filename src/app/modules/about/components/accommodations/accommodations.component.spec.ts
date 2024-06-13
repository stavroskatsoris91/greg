import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccommodationsComponent } from './accommodations.component';

describe('AccommodationsComponent', () => {
  let component: AccommodationsComponent;
  let fixture: ComponentFixture<AccommodationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
