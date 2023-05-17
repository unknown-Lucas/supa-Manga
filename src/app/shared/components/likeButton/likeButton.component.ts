import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { modules } from './m';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [...modules],
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
