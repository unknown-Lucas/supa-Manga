import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { NotificationActions } from 'src/app/core/state/notifications/notifications.actions';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: ` <button
    mat-icon-button
    (click)="likeManga()"
    [color]="liked ? 'warn' : ''"
  >
    <mat-icon>favorite</mat-icon>
  </button>`,
})
export class LikeButtonComponent {
  @Input()
  manga_id: number = 0;
  @Input()
  liked: boolean = false;
  @Input()
  user_id: string = '';
  constructor(private _store: Store) {}

  likeManga() {
    console.log(this.manga_id, this.user_id);
  }
}
