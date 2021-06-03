import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInButtonComponent } from './sign-in-button.component';

describe('SignInComponent', () => {
  let component: SignInButtonComponent;
  let fixture: ComponentFixture<SignInButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
