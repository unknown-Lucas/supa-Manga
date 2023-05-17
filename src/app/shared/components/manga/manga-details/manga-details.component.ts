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
  selectisMangaChaptersLoading,
  selectIsMangaSelectedLoading,
  selectMangaChapters,
  selectMangaSelected,
} from 'src/app/core/state/mangas/mangas/mangas.selectors';
import { MangaChaptersListComponent } from './components/manga-chapters-list/manga-chapters-list.component';

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
    MangaChaptersListComponent,
  ],
  styleUrls: ['./manga-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaDetailsComponent implements AfterViewInit, OnDestroy {
  manga$;
  mangaChapters$;
  mangaChaptersLoading$;
  loading$;
  destroy$ = new ReplaySubject<Boolean>();

  constructor(
    private _store: Store,
    private _matBottomSheetRef: MatBottomSheetRef<MangaDetailsComponent>
  ) {
    this.manga$ = this._store.select(selectMangaSelected);
    this.mangaChapters$ = this._store.select(selectMangaChapters);
    this.mangaChaptersLoading$ = this._store.select(
      selectisMangaChaptersLoading
    );
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
  }
}
