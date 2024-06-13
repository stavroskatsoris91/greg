import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HorsesComponent } from './horses.component';

describe('HorsesComponent', () => {
  let component: HorsesComponent;
  let fixture: ComponentFixture<HorsesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
