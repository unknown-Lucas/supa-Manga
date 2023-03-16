import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MangaModel } from 'src/app/core/models/manga.model';
import { NgOptimizedImage } from '@angular/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MangaDetailsComponent } from '../manga-details/manga-details.component';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { Store } from '@ngrx/store';
import { NotificationActions } from 'src/app/core/state/notifications/notifications.actions';
import { Clipboard } from '@angular/cdk/clipboard';
import { MangaActions } from 'src/app/core/state/mangas/mangas.actions';
import { take } from 'rxjs';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
    MatButtonModule,
    ClipboardModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaCardComponent {
  @Input()
  manga: MangaModel = {} as MangaModel;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _store: Store,
    private clipboard: Clipboard
  ) {}

  getMangaStateClass(state: string): string {
    const stateDict: { [K: string]: string } = {
      ongoing: 'ongoing-header-image',
      completed: 'completed-header-image',
      cancelled: 'cancelled-header-image',
      hiatus: 'hiatus-header-image',
    };
    return stateDict[state];
  }

  read() {
    this._store.dispatch(
      MangaActions.SELECT_MANGA_BY_ID({
        attributes: [],
        mangaId: this.manga._id,
      })
    );
    this._bottomSheet
      .open(MangaDetailsComponent)
      .afterDismissed()
      .pipe(take(1))
      .subscribe(() =>
        this._store.dispatch(MangaActions.RESET_SELECTED_MANGA())
      );
  }

  shareUrl() {
    this._store.dispatch(
      NotificationActions.SHOW_OK_MESSAGE({
        message: 'Succesfully copied to the clipboard!!',
      })
    );
    this.clipboard.copy(`${window.location.host}/mangas/${this.manga._id}`);
  }
}
