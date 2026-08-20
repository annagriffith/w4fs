import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  // check if a user is logged in
  const currentUser = localStorage.getItem('currentUser');

  if (currentUser) {
    // allow access if current user exists
    return true;
  }

  // send user back to login if not logged in
  return router.createUrlTree(['/login']);
};
