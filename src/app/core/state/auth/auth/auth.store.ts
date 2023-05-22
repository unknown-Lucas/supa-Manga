import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActualUserId, selectIsUserLogged } from './auth.selectors';
import { AuthActions } from './auth.actions';
import { userForm } from 'src/app/core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  userId$;
  isUserLogged$;

  constructor(private _store: Store) {
    this.userId$ = this._store.select(selectActualUserId);
    this.isUserLogged$ = this._store.select(selectIsUserLogged);
  }

  public logIn({ ...params }: userForm) {
    this._store.dispatch(AuthActions.LOG_IN(params));
  }

  public singUp({ ...params }: userForm) {
    this._store.dispatch(AuthActions.SING_UP(params));
  }

  public logOut() {
    this._store.dispatch(AuthActions.LOG_OUT());
  }

  public checkCurrentToken() {
    this._store.dispatch(AuthActions.CHECK_CURRENT_TOKEN());
  }
}
