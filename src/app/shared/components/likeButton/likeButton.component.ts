import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { modules } from './m';
import { MangaLikesStore } from 'src/app/core/state/mangaLikes/mangaLikes.store';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [...modules],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <button
    mat-icon-button
    (click)="likeManga()"
    [color]="(liked$ | async) ? 'warn' : ''"
  >
    <mat-icon>favorite</mat-icon>
  </button>`,
})
export class LikeButtonComponent {
  @Input()
  mangaId: number = 0;
  @Input()
  liked$ = new BehaviorSubject(false);
  @Input()
  userUID: string = '';

  constructor(private _mangaLikeStore: MangaLikesStore) {}

  likeManga() {
    this._mangaLikeStore.likeManga({
      userUID: this.userUID,
      mangaId: this.mangaId,
    });
  }
}
