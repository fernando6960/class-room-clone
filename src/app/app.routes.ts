import { Routes } from '@angular/router';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { LoginFormComponent } from '@pages/login-form/login-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'login' },
];
