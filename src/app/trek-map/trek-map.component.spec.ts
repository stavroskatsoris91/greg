import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekMapComponent } from './trek-map.component';

describe('TrekMapComponent', () => {
  let component: TrekMapComponent;
  let fixture: ComponentFixture<TrekMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrekMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
