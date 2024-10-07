import { CanActivateFn } from '@angular/router';

export const smartphoneGuard: CanActivateFn = (route, state) => {
  return true;
};
