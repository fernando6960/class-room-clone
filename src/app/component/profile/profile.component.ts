import { Component, inject, input, signal } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  title = input('Perfil');
  activate = signal(false);
  Auth: AuthService;
  constructor() {
    this.Auth = inject(AuthService);
  }
  logout() {
    this.Auth.logout();
  }
}
