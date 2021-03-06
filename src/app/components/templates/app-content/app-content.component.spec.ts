import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentComponent } from './app-content.component';

describe('HomeComponent', () => {
  let component: AppContentComponent;
  let fixture: ComponentFixture<AppContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
