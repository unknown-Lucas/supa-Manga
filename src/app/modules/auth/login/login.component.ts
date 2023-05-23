import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { modules } from '../m';
import { NotificationStore } from 'src/app/core/state/notifications/notifications.store';
import { AuthStore } from 'src/app/core/state/auth/auth.store';

@Component({
  standalone: true,
  imports: [...modules],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _router: Router,
    private _authStore: AuthStore,
    private _notificationStore: NotificationStore
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get emailErrors() {
    const emailControl = this.loginForm.get('email');
    return emailControl?.hasError('email');
  }

  get passwordErrors() {
    const passwordControl = this.loginForm.get('password');
    return passwordControl?.hasError('minlength');
  }

  get isInvalid() {
    return this.loginForm.invalid || this.loginForm.pristine;
  }

  logIn() {
    const value = { ...this.loginForm.value } as {
      email: string;
      password: string;
    };

    this._authStore.logIn({ password: value.password, email: value.email });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('Auth');
    if (token) {
      this._notificationStore.emitInfoMessage('You are already logged In');
      this._router.navigate(['/home']);
    }
  }
}
