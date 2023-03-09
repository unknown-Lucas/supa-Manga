import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { NotificationActions } from './notifications.actions';

@Injectable()
export class NotificationEffects {
  openSnackBar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotificationActions.SHOW_OK_MESSAGE.type),
      map(({ message }) => {
        this._snackbar.open(message, 'Close', {
          duration: 2000,
        });
        return NotificationActions.DONE();
      })
    )
  );

  constructor(private actions$: Actions, private _snackbar: MatSnackBar) {}
}
