import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFromComponent } from './signup-from.component';

describe('SignupFromComponent', () => {
  let component: SignupFromComponent;
  let fixture: ComponentFixture<SignupFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
