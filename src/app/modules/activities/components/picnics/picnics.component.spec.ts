import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PicnicsComponent } from './picnics.component';

describe('PicnicsComponent', () => {
  let component: PicnicsComponent;
  let fixture: ComponentFixture<PicnicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PicnicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicnicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
