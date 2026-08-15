import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

// This guard protects pages that should only be available after login.
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const currentUser = localStorage.getItem('currentUser');

  // If a user is stored in localStorage, allow access.
  if (currentUser) {
    return true;
  }

  // Otherwise redirect them back to the login page.
  return router.createUrlTree(['/login']);
};
