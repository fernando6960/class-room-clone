import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { map, take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const routes = inject(Router);
  return authService.isAuthenticated().pipe(
    take(1),
    tap((elm) => console.log(elm)),
    map((isLoggedIn) =>
      !isLoggedIn ? routes.createUrlTree(['/login']) : true,
    ),
  );
};
