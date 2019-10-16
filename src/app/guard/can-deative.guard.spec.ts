import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeativeGuard } from './can-deative.guard';

describe('CanDeativeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeativeGuard]
    });
  });

  it('should ...', inject([CanDeativeGuard], (guard: CanDeativeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
