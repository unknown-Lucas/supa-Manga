import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthStore } from '../state/auth/auth/auth.store';
import { Store } from '@ngrx/store';
import { NotificationActions } from '../state/notifications/notifications.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authStore: AuthStore,
    private _router: Router,
    private _store: Store
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isLogged = false;
    this._authStore.isUserLogged$.pipe(take(1)).subscribe((a) => {
      isLogged = true;
    });
    if (isLogged) return true;
    this._store.dispatch(
      NotificationActions.SHOW_WARNING_MESSAGE({
        message: 'You cant access this page if you are not logged in',
      })
    );
    this._router.navigate(['login']);
    return false;
  }
}
