import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { modules } from './m';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [...modules],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <button
    mat-icon-button
    (click)="likeManga()"
    [color]="liked ? 'warn' : ''"
  >
    <mat-icon>favorite</mat-icon>
  </button>`,
})
export class LikeButtonComponent implements OnChanges {
  @Input()
  manga_id: number = 0;
  @Input()
  liked: boolean | null = null;
  @Input()
  user_id: string = '';
  constructor(private _store: Store) {}

  ngOnChanges(a: any) {
    console.log(a);
  }

  likeManga() {
    this.liked = !this.liked;
    console.log(this.manga_id, this.user_id);
  }
}
