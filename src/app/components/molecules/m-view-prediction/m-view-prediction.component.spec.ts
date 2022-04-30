import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MViewPredictionComponent } from './m-view-prediction.component';

describe('MViewPredictionComponent', () => {
  let component: MViewPredictionComponent;
  let fixture: ComponentFixture<MViewPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MViewPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MViewPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
