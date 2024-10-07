import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { smartphoneGuard } from './smartphone.guard';

describe('smartphoneGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => smartphoneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
