import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPredictionsComponent } from './o-predictions.component';

describe('OPredictionsComponent', () => {
  let component: OPredictionsComponent;
  let fixture: ComponentFixture<OPredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPredictionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
