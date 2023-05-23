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
import { notificationStore } from '../state/notifications/notifications.store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authStore: AuthStore,
    private _router: Router,
    private _notificationStore: notificationStore
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
      isLogged = a;
    });
    if (isLogged) return true;
    this._notificationStore.emitWarningMessage(
      'You cant access this page if you are not logged in'
    );
    this._router.navigate(['login']);
    return false;
  }
}
