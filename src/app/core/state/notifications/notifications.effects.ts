import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { NotificationActions } from './notifications.actions';

@Injectable()
export class NotificationEffects {
  openSnackBarOk$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotificationActions.SHOW_OK_MESSAGE.type),
      map(({ message }) => {
        this._snackbar.open(message, 'Close', {
          duration: 2000,
          panelClass: ['snackbar-ok'],
        });
        return NotificationActions.DONE();
      })
    )
  );

  openSnackBarInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotificationActions.SHOW_INFO_MESSAGE.type),
      map(({ message }) => {
        this._snackbar.open(message, 'Close', {
          duration: 3000,
          panelClass: ['snackbar-info'],
        });
        return NotificationActions.DONE();
      })
    )
  );

  openSnackBarError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotificationActions.SHOW_WARNING_MESSAGE.type),
      map(({ message }) => {
        this._snackbar.open(message, 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
        });
        return NotificationActions.DONE();
      })
    )
  );

  constructor(private actions$: Actions, private _snackbar: MatSnackBar) {}
}
