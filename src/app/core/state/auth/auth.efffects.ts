import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { NotificationActions } from '../notifications/notifications.actions';
import { AuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  singIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.SING_UP.type),
      mergeMap(({ email, password }) =>
        this._authService.singUp({ email, password }).pipe(
          switchMap((data: any) => {
            if (data.aud === 'authenticated') {
              return [
                NotificationActions.SHOW_OK_MESSAGE({
                  message: 'There is already an account with that email',
                }),
              ];
            }
            return [
              NotificationActions.SHOW_OK_MESSAGE({
                message: 'Account successfully created',
              }),
              AuthActions.LOG_IN({
                email,
                password,
              }),
            ];
          }),
          catchError((errorData: any) => {
            console.log(errorData);
            return of(
              NotificationActions.SHOW_WARNING_MESSAGE({
                message: errorData?.error?.error_description ?? errorData?.msg,
              })
            );
          })
        )
      )
    );
  });

  logIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOG_IN.type),
      mergeMap(({ email, password }) =>
        this._authService.logIn({ email, password }).pipe(
          switchMap((data) => {
            this._router.navigate(['/']);
            return [
              AuthActions.LOG_IN_SUCCESS({ user: data }),
              NotificationActions.SHOW_OK_MESSAGE({
                message: 'successfully logged in',
              }),
            ];
          }),
          catchError((errorData: any) => {
            console.log(errorData);
            return of(
              NotificationActions.SHOW_WARNING_MESSAGE({
                message: errorData?.error?.error_description ?? errorData?.msg,
              })
            );
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _router: Router
  ) {}
}
