import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Observable, switchMap, take } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req,
  next,
): Observable<HttpEvent<any>> => {
  const auth = inject(AuthService);
  return auth.getToken().pipe(
    take(1),
    switchMap((token) => {
      const authReq = token
        ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
        : req;
      return next(authReq);
    }),
  );
};
