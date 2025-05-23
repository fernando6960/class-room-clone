import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, LoginComponent, SignupComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  login = signal(true);
  ngOnInit() {}
  constructor() {}
  changeView(evt: any) {
    this.login.set(evt);
  }
  // loginUser_SignUp() {}
}
