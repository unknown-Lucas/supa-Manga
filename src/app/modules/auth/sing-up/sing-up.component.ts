import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from 'src/app/core/state/auth/auth.actions';
import { modules } from '../m';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [...modules],
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent {
  constructor(private _store: Store) {}

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get emailErrors() {
    const emailControl = this.registerForm.get('email');
    return emailControl?.hasError('email');
  }

  get passwordErrors() {
    const passwordControl = this.registerForm.get('password');
    return passwordControl?.hasError('minlength');
  }

  get isInvalid() {
    return this.registerForm.invalid || this.registerForm.pristine;
  }

  singUp() {
    const value = { ...this.registerForm.value } as {
      email: string;
      password: string;
    };

    this._store.dispatch(
      AuthActions.SING_UP({ password: value.password, email: value.email })
    );
  }
}
