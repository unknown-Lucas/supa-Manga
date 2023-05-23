import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap, of, take } from 'rxjs';
import { ChapterModel } from 'src/app/core/models/chapters.model';
import { ChapterService } from 'src/app/core/services/chapters.service';
import { ChapterActions } from './chapters.actions';
import { NotificationStore } from '../../notifications/notifications.store';
import { AuthStore } from '../../auth/auth.store';

@Injectable()
export class ChapterEffects {
  selectChapter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChapterActions.GET_MANGA_CHAPTERS.type),
      mergeMap(({ mangaId, attributes }) =>
        this._chapterService.getChapterByMangaId(mangaId, attributes).pipe(
          map((data) => {
            this._authStore.isUserLogged$
              .pipe(take(1))
              .subscribe((isLogged) => {
                if (!isLogged)
                  this._notificationStore.emitInfoMessage(
                    'You need to be logged in to see the chapters'
                  );
              });
            return ChapterActions.GET_MANGA_CHAPTERS_SUCCESS({
              chapter: data.at(0) as ChapterModel,
            });
          }),
          catchError((errorData: any) => {
            this._notificationStore.emitWarningMessage(
              errorData.error?.msg ??
                errorData.error?.message ??
                errorData?.error?.error_description
            );
            return EMPTY;
          })
        )
      )
    );
  });

  selectChapterImages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChapterActions.GET_MANGA_CHAPTERS_IMAGES),
      mergeMap(({ chapterCode }) =>
        this._chapterService.getChapterImages(chapterCode).pipe(
          map((data) => {
            return ChapterActions.GET_MANGA_CHAPTERS_IMAGES_SUCCESS({
              imagesData: JSON.parse(data.contents),
            });
          }),
          catchError((errorData: any) => {
            this._notificationStore.emitWarningMessage(
              errorData.error?.msg ??
                errorData.error?.message ??
                errorData?.error?.error_description
            );
            return EMPTY;
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private _chapterService: ChapterService,
    private _notificationStore: NotificationStore,
    private _authStore: AuthStore
  ) {}
}
