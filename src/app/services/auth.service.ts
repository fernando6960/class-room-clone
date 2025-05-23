import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUp } from '@models/ISignUp';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient;
  private router;
  private URL = environment.URL;
  private access;
  private tokenKey: string = 'authToken';
  private readonly loggedIn = new BehaviorSubject<boolean>(false);
  private rol: 'estudiante' | 'profesor' | undefined;
  constructor() {
    this.access = new BehaviorSubject<string>('');
    this.httpClient = inject(HttpClient);
    this.router = inject(Router);
  }
  login(user: string, password: string) {
    const data = { username: user, password: password, email: '', rol: '' };
    return this.httpClient
      .post<{
        token: {
          access: string;
          refresh: string;
          rol: 'profesor' | 'estudiante';
        };
      }>(this.URL + '/auth/login/', data)
      .pipe(
        tap((response) => {
          if (response.token) {
            console.log(response.token);
            this.access.next(response.token.access);
            this.rol = response.token.rol;
            this.loggedIn.next(true);
            localStorage.setItem(this.tokenKey, response.token.refresh);
          }
        }),
      );
  }
  signup(obj: ISignUp) {
    return this.httpClient
      .post<{
        token: {
          access: string;
          refresh: string;
          rol: 'profesor' | 'estudiante';
        };
      }>(this.URL + '/auth/signup/', obj)
      .pipe(
        tap((response) => {
          console.log(response);
          if (response) {
            this.rol = obj.rol;
            this.access.next(response.token.access);
            this.rol = response.token.rol;
            this.loggedIn.next(true);
            localStorage.setItem(this.tokenKey, response.token.refresh);
          }
        }),
      );
  }
  logout() {
    this.access.next('');
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
  // get isLoggedIn() {
  //   const refresh = localStorage.getItem(this.tokenKey);
  //   return this.isTokenExpired(refresh);
  // }
  get User() {
    const refresh = localStorage.getItem(this.tokenKey);
    const payload = JSON.parse(atob(refresh!.split('.')[1]));
    return payload.user_id;
  }
  isAuthenticated(): Observable<boolean> {
    // this.refreshAuth();
    return this.refreshAuth();
  }
  refreshAuth(): Observable<boolean> {
    const refresh = localStorage.getItem(this.tokenKey);

    if (!this.isTokenExpired(refresh)) return this.loggedIn.asObservable();

    return this.httpClient
      .post<{
        token: {
          refresh: string;
          access: string;
          rol: 'estudiante' | 'profesor';
        };
      }>(this.URL + '/auth/refresh/', { refresh })
      .pipe(
        map(({ token }) => {
          if (token) {
            this.access.next(token.access);
            localStorage.setItem(this.tokenKey, token.refresh);
            this.loggedIn.next(true);
            this.rol = token.rol;
            return true;
          }
          return false;
        }),
        catchError((err) => {
          this.loggedIn.next(false);
          return of(false);
        }),
      );
  }
  get getRol() {
    return this.rol;
  }
  getToken() {
    return this.access;
  }
  private isTokenExpired(token: string | null): boolean {
    if (!token) return false;
    return JSON.parse(atob(token.split('.')[1])).exp > Date.now() / 1000;
  }
}
