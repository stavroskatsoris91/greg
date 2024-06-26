import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TreksComponent } from './treks.component';

describe('TreksComponent', () => {
  let component: TreksComponent;
  let fixture: ComponentFixture<TreksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
