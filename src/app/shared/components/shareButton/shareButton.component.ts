import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { modules } from './m';
import { NotificationStore } from 'src/app/core/state/notifications/notifications.store';

@Component({
  selector: 'app-share-button',
  standalone: true,
  imports: [...modules],
  template: ` <button mat-raised-button color="primary" (click)="shareUrl()">
    SHARE
  </button>`,
})
export class shareButtonComponent {
  @Input()
  url: string = '';
  constructor(
    private _notificationStore: NotificationStore,
    private clipboard: Clipboard
  ) {}

  shareUrl() {
    this._notificationStore.emitOkMessage(
      'Succesfully copied to the clipboard!!'
    );
    this.clipboard.copy(this.url);
  }
}
