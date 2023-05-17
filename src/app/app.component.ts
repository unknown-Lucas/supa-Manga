import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AuthActions } from './core/state/auth/auth/auth.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _store: Store) {
    this._store.dispatch(AuthActions.CHECK_CURRENT_TOKEN());
  }
}
