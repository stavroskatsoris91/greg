import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripAdvisorComponent } from './trip-advisor.component';

describe('TripAdvisorComponent', () => {
  let component: TripAdvisorComponent;
  let fixture: ComponentFixture<TripAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripAdvisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
