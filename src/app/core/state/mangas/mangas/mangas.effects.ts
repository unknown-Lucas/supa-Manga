import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { MangaModel } from 'src/app/core/models/manga.model';
import { MangaService } from 'src/app/core/services/manga.service';
import { NotificationActions } from '../../notifications/notifications.actions';
import { ChapterActions } from '../chapters/chapters.actions';

import { MangaActions } from './mangas.actions';

@Injectable()
export class MangaEffects {
  getAllMangas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MangaActions.GET_MANGAS),
      mergeMap(({ attributes }) =>
        this._mangaService.getMangas(attributes).pipe(
          map((data) =>
            MangaActions.GET_ALL_MANGAS_SUCCESS({ mangaCollection: data })
          ),
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

  selectMangas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MangaActions.SELECT_MANGA_BY_ID),
      mergeMap(({ mangaId, attributes }) => {
        return this._mangaService.getMangaById(mangaId, attributes).pipe(
          concatMap((data) => [
            MangaActions.RESET_SELECTED_MANGA(),
            MangaActions.SELECT_MANGA_BY_ID_SUCCESS({
              mangaSelected: data.at(0),
            }),
          ]),
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
        );
      })
    );
  });

  selectChapterWhenMangaIsSelected$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MangaActions.SELECT_MANGA_BY_ID_SUCCESS),
      mergeMap(({ mangaSelected }) => {
        return of(
          ChapterActions.GET_MANGA_CHAPTERS({
            mangaId: mangaSelected?._id ?? 0,
            attributes: [],
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private _mangaService: MangaService) {}
}
