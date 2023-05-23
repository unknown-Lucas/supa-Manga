import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationActions } from './notifications.actions';

@Injectable()
export class notificationStore {
  constructor(private _store: Store) {}

  emitOkMessage(message: string) {
    this._store.dispatch(NotificationActions.SHOW_OK_MESSAGE({ message }));
  }

  emitInfoMessage(message: string) {
    this._store.dispatch(NotificationActions.SHOW_INFO_MESSAGE({ message }));
  }

  emitWarningMessage(message: string) {
    this._store.dispatch(NotificationActions.SHOW_WARNING_MESSAGE({ message }));
  }
}
