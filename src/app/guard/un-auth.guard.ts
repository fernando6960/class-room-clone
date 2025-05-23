import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { map, take, tap } from 'rxjs';

export const unAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const routes = inject(Router);
  return authService.isAuthenticated().pipe(
    take(1),
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return routes.createUrlTree(['/dashboard']);
      }
      return true;
    }),
    // map((isLoggedIn) => (!isLoggedIn ? true : routes.navigate(['/dashboard']))),
  );
};
