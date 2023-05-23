import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { filter, ReplaySubject, take, takeUntil } from 'rxjs';

import { modules } from './m';
import { MangaStore } from 'src/app/core/state/mangas/mangas/mangas.store';
import { ChaptersStore } from 'src/app/core/state/mangas/chapters/chapters.store';
import { AuthStore } from 'src/app/core/state/auth/auth/auth.store';
import { environment } from 'src/environments/environment';
import { notificationStore } from 'src/app/core/state/notifications/notifications.store';

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
    private _mangaStore: MangaStore,
    private _chapterStore: ChaptersStore,
    private _notificationStore: notificationStore,
    private _authStore: AuthStore,
    private _matBottomSheetRef: MatBottomSheetRef<MangaDetailsComponent>
  ) {
    this.manga$ = this._mangaStore.mangaSelected$;
    this.mangaChapters$ = this._chapterStore.mangaChapters$;
    this.mangaChaptersLoading$ = this._chapterStore.isMangaChaptersLoading$;
    this.actualUserId$ = this._authStore.userId$;
    this.loading$ = this._mangaStore.isMangaSelectedLoading$;
  }

  getMangaUrl(id: number) {
    return `${environment.myHost}/home/${id}`;
  }

  ngAfterViewInit(): void {
    this.loading$
      .pipe(takeUntil(this.destroy$))
      .pipe(filter((bool) => !bool))
      .subscribe(() => {
        this.manga$.pipe(take(1)).subscribe((manga) => {
          if (!manga) {
            this._matBottomSheetRef.dismiss();
            this._notificationStore.emitWarningMessage(
              'There is no such manga'
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
