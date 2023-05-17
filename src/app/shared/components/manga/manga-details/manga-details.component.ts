import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { filter, ReplaySubject, take, takeUntil } from 'rxjs';

import { NotificationActions } from 'src/app/core/state/notifications/notifications.actions';
import {
  selectisMangaChaptersLoading,
  selectIsMangaSelectedLoading,
  selectMangaChapters,
  selectMangaSelected,
} from 'src/app/core/state/mangas/mangas/mangas.selectors';
import { modules } from './m';
import { selectActualUserId } from 'src/app/core/state/auth/auth/auth.selectors';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  standalone: true,
  imports: [...modules],
  styleUrls: ['./manga-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaDetailsComponent implements AfterViewInit, OnDestroy {
  manga$;
  mangaChapters$;
  mangaChaptersLoading$;
  loading$;
  actualUserId$;
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
    this.actualUserId$ = this._store.select(selectActualUserId);
    this.loading$ = this._store.select(selectIsMangaSelectedLoading);
  }

  getMangaUrl(id: number) {
    return `${window.location.host}/home/${id}`;
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

  likeManga() {
    let _id = null;
    this.manga$.pipe(take(1)).subscribe((a) => (_id = a?._id ?? 0));
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
