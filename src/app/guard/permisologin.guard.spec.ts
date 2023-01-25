import { TestBed } from '@angular/core/testing';

import { PermisologinGuard } from './permisologin.guard';

describe('PermisologinGuard', () => {
  let guard: PermisologinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisologinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
