import { TestBed } from '@angular/core/testing';

import { PermisohomeGuard } from './permisohome.guard';

describe('PermisohomeGuard', () => {
  let guard: PermisohomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisohomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
