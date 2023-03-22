import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ChapterService } from 'src/app/core/services/chapters.service';
import { isUserLogged } from '../../auth/auth.selector';
import { NotificationActions } from '../../notifications/notifications.actions';
import { ChapterActions } from './chapters.actions';

@Injectable()
export class ChapterEffects {
  selectMangas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChapterActions.GET_MANGA_CHAPTERS.type),
      mergeMap(({ mangaId, attributes }) =>
        this._chapterService.getChapterByMangaId(mangaId, attributes).pipe(
          map((data) => {
            this._store.select(isUserLogged).subscribe((isLogged) => {
              if (!isLogged)
                this._store.dispatch(
                  NotificationActions.SHOW_INFO_MESSAGE({
                    message: ' You need to be logged in to see the chapters',
                  })
                );
            });
            return ChapterActions.GET_MANGA_CHAPTERS_SUCCESS({
              chaptersCollection: data,
            });
          }),
          catchError((errorData: any) => {
            return of(
              NotificationActions.SHOW_WARNING_MESSAGE({
                message:
                  errorData.error?.msg ??
                  errorData.error?.message ??
                  errorData?.error?.error_description,
              })
            );
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private _store: Store,
    private _chapterService: ChapterService
  ) {}
}
