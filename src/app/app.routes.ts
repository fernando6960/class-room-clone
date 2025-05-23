import { Routes } from '@angular/router';
import DashboardRoutes from '@pages/dashboard/dashboard.routes';
import { LoginFormComponent } from '@pages/login-form/login-form.component';
import { authGuard } from './guard/auth.guard';
import { unAuthGuard } from './guard/un-auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent, canActivate: [unAuthGuard] },
  {
    path: 'dashboard',
    children: DashboardRoutes,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'login' },
];
