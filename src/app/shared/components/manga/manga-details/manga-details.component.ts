import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {
  filter,
  first,
  switchMap,
  ReplaySubject,
  take,
  takeUntil,
  tap,
} from 'rxjs';

import { modules } from './m';
import { MangaStore } from 'src/app/core/state/mangas/mangas/mangas.store';
import { ChaptersStore } from 'src/app/core/state/mangas/chapters/chapters.store';
import { environment } from 'src/environments/environment';
import { NotificationStore } from 'src/app/core/state/notifications/notifications.store';
import { AuthStore } from 'src/app/core/state/auth/auth.store';
import { MangaLikesStore } from 'src/app/core/state/mangaLikes/mangaLikes.store';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  standalone: true,
  imports: [...modules],
  styleUrls: ['./manga-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  manga$;
  mangaChapters$;
  isLiked = false;
  mangaChaptersLoading$;
  userLikes$;
  loading$;
  actualUserId$;
  destroy$ = new ReplaySubject<Boolean>();

  constructor(
    private _mangaStore: MangaStore,
    private _chapterStore: ChaptersStore,
    private _notificationStore: NotificationStore,
    private _authStore: AuthStore,
    private _mangaLikeStore: MangaLikesStore,
    private _matBottomSheetRef: MatBottomSheetRef<MangaDetailsComponent>
  ) {
    this.manga$ = this._mangaStore.mangaSelected$;
    this.mangaChapters$ = this._chapterStore.mangaChapters$;
    this.mangaChaptersLoading$ = this._chapterStore.isMangaChaptersLoading$;
    this.actualUserId$ = this._authStore.userId$;
    this.loading$ = this._mangaStore.isMangaSelectedLoading$;
    this.userLikes$ = this._mangaLikeStore.collection$;
  }

  getMangaUrl(id: number) {
    return `${environment.myHost}/home/${id}`;
  }

  ngOnInit() {
    this.userLikes$
      .pipe(
        takeUntil(this.destroy$),
        switchMap((likes) =>
          this.manga$.pipe(
            takeUntil(this.destroy$),
            tap((manga) => {
              if (!manga) return;
              if (likes.has(manga?._id)) return (this.isLiked = true);
              return (this.isLiked = false);
            })
          )
        )
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.loading$ //? Check if manga has loaded correctly
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
    //? given a state returns the circle color associated to that state
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
