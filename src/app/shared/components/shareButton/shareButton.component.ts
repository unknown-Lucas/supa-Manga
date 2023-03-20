import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { NotificationActions } from 'src/app/core/state/notifications/notifications.actions';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-share-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: ` <button mat-raised-button (click)="shareUrl()">SHARE</button>`,
})
export class shareButtonComponent {
  @Input()
  url: string = '';
  constructor(private _store: Store, private clipboard: Clipboard) {}

  shareUrl() {
    this._store.dispatch(
      NotificationActions.SHOW_OK_MESSAGE({
        message: 'Succesfully copied to the clipboard!!',
      })
    );
    console.log(window.location);
    this.clipboard.copy(this.url);
  }
}
