import { TestBed } from '@angular/core/testing';

import { SignupdataService } from './signupdata.service';

describe('SignupdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupdataService = TestBed.get(SignupdataService);
    expect(service).toBeTruthy();
  });
});
