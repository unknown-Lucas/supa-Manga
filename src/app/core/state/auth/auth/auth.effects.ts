import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, mergeMap, of, switchMap, map } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { NotificationActions } from '../../notifications/notifications.actions';
import { AuthActions } from './auth.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  singIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.SING_UP),
      mergeMap(({ email, password }) =>
        this._authService.singUp({ email, password }).pipe(
          switchMap((data: any) => {
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
            return of(
              NotificationActions.SHOW_WARNING_MESSAGE({
                message:
                  errorData.error?.msg ??
                  errorData.error?.message ??
                  errorData?.error?.error_description,
              })
            );
          })
        )
      )
    );
  });

  logIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOG_IN),
      mergeMap(({ email, password }) =>
        this._authService.logIn({ email, password }).pipe(
          switchMap((data) => {
            this._router.navigate(['/home']);
            return [
              AuthActions.LOG_IN_SUCCESS({ user: data }),
              NotificationActions.SHOW_OK_MESSAGE({
                message: 'successfully logged in',
              }),
            ];
          }),
          catchError((errorData: any) => {
            return of(
              NotificationActions.SHOW_WARNING_MESSAGE({
                message:
                  errorData.error?.msg ??
                  errorData.error?.message ??
                  errorData?.error?.error_description,
              })
            );
          })
        )
      )
    );
  });

  checkUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.CHECK_CURRENT_TOKEN),
      mergeMap(() => {
        return this._authService.getUser().pipe(
          map((data) => {
            return AuthActions.LOG_IN_SUCCESS({ user: data });
          }),
          catchError((errorData: any) => {
            this._router.navigate(['login']);

            return EMPTY;
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private _store: Store,
    private _authService: AuthService,
    private _router: Router
  ) {}
}
