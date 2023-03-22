import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { filter, ReplaySubject, take, takeUntil } from 'rxjs';

import { NotificationActions } from 'src/app/core/state/notifications/notifications.actions';
import { shareButtonComponent } from '../../shareButton/shareButton.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  selectIsMangaSelectedLoading,
  selectMangaSelected,
} from 'src/app/core/state/mangas/mangas/mangas.selector';
import { ChapterActions } from 'src/app/core/state/mangas/chapters/chapters.actions';
import { MangaActions } from 'src/app/core/state/mangas/mangas/mangas.actions';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    shareButtonComponent,
    MatProgressBarModule,
  ],
  styleUrls: ['./manga-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaDetailsComponent implements AfterViewInit, OnDestroy {
  manga$;
  loading$;
  destroy$ = new ReplaySubject<Boolean>();

  constructor(
    private _store: Store,
    private _matBottomSheetRef: MatBottomSheetRef<MangaDetailsComponent>
  ) {
    this.manga$ = this._store.select(selectMangaSelected);
    this.loading$ = this._store.select(selectIsMangaSelectedLoading);
  }

  getMangaUrl(id: number) {
    return `${window.location.host}/mangas/${id}`;
  }

  ngAfterViewInit(): void {
    this.loading$
      .pipe(takeUntil(this.destroy$))
      .pipe(filter((bool) => !bool))
      .subscribe(() => {
        this.manga$.pipe(take(1)).subscribe((manga) => {
          if (!manga) {
            this._matBottomSheetRef.dismiss();
            return this._store.dispatch(
              NotificationActions.SHOW_WARNING_MESSAGE({
                message: 'There is no such manga',
              })
            );
          }
          return this._store.dispatch(
            ChapterActions.GET_MANGA_CHAPTERS({
              mangaId: manga?._id ?? 0,
              attributes: [],
            })
          );
        });
      });
  }

  getMangaStateClass(state: string): string {
    const stateDict: { [K: string]: string } = {
      ongoing: 'ongoing-header-image',
      completed: 'completed-header-image',
      cancelled: 'cancelled-header-image',
      hiatus: 'hiatus-header-image',
    };
    return stateDict[state];
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this._store.dispatch(MangaActions.RESET_SELECTED_MANGA());
  }
}
