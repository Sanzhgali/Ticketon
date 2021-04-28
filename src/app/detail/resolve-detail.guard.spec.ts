import { TestBed } from '@angular/core/testing';

import { ResolveDetailGuard } from './resolve-detail.guard';

describe('ResolveDetailGuard', () => {
  let guard: ResolveDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResolveDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
