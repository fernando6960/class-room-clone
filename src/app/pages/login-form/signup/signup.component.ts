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
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  login: OutputEmitterRef<boolean> = output();
  fg: FormGroup;
  Auth: AuthService;
  router: Router;
  constructor() {
    this.Auth = inject(AuthService);
    this.router = inject(Router);
    this.fg = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      rol: new FormControl('estudiante', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  goToLogin(evt: any) {
    evt.preventDefault();
    this.login.emit(true);
  }
  onSubmit(evt: any) {
    evt.preventDefault();
    this.Auth.signup({
      email: this.fg.get('email')?.value,
      username: this.fg.get('username')?.value,
      password: this.fg.get('password')?.value,
      rol: this.fg.get('rol')?.value,
    }).subscribe({
      next: ({ token }) => {
        if (!token) alert('Ha ocurrido un error al registrar');
        else this.router.navigate(['/dashboard']);
      },
      error: (err) => console.error(err),
    });
  }
}
