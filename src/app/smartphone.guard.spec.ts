import { TestBed } from '@angular/core/testing';

import { SmartphoneGuard} from './smartphone.guard';

describe('ProduitGuard', () => {
  let guard: SmartphoneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SmartphoneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});