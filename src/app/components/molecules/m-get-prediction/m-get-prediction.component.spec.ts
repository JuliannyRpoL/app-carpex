import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MGetPredictionComponent } from './m-get-prediction.component';

describe('MGetPredictionComponent', () => {
  let component: MGetPredictionComponent;
  let fixture: ComponentFixture<MGetPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MGetPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MGetPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
