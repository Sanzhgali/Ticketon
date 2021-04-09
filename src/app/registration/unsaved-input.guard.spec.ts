import { TestBed } from '@angular/core/testing';

import { UnsavedInputGuard } from './unsaved-input.guard';

describe('UnsavedInputGuard', () => {
  let guard: UnsavedInputGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnsavedInputGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
