import { Component, inject, output, OutputEmitterRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  registrar: OutputEmitterRef<boolean> = output();
  private Auth: AuthService = inject(AuthService);
  private router: Router;
  protected fg: FormGroup;

  constructor() {
    this.router = inject(Router);
    this.fg = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  goToSignUp(evt: any) {
    evt.preventDefault();
    this.registrar.emit(false);
  }
  onSubmit() {
    const username = this.fg.get('username')?.value;
    const password = this.fg.get('password')?.value;
    const sub = this.Auth.login(username, password);
    sub.subscribe({
      next: (elm) => {
        if (!elm.token) alert('Usuario o contraseña incorrectos.');
        else this.router.navigate(['/dashboard']);
      },
      error: () => alert('Error al iniciar session'),
    });
  }
}
