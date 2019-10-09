import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFromComponent } from './registration-from.component';

describe('RegistrationFromComponent', () => {
  let component: RegistrationFromComponent;
  let fixture: ComponentFixture<RegistrationFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
