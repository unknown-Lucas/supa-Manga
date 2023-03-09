import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from 'src/app/core/state/auth/auth.actions';
import { modules } from '../m';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...modules],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _store: Store) {}

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

    this._store.dispatch(
      AuthActions.LOG_IN({ password: value.password, email: value.email })
    );
  }
}
