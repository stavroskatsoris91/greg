import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoinComponent } from './coin.component';

describe('CoinComponent', () => {
  let component: CoinComponent;
  let fixture: ComponentFixture<CoinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
