import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthModel } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { modules } from '../m';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  providers: [AuthService],
  imports: [...modules],
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent {
  constructor(private _authService: AuthService) {}

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
    console.log('a');
    const value = this.registerForm.value as AuthModel;
    this._authService.singUp(value).subscribe((res) => {
      console.log(res);
    });
    // this._store.dispatch(AuthActions.SING_UP({ ...value }));
  }
}
