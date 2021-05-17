import { TestBed } from '@angular/core/testing';

import { ServerResolver } from './resolve-detail.guard';

describe('ResolveDetailGuard', () => {
  let guard: ServerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ServerResolver);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
