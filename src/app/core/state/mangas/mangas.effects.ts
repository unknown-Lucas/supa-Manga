import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MangaService } from '../../services/manga.service';
import { NotificationActions } from '../notifications/notifications.actions';
import { MangaActions } from './mangas.actions';

@Injectable()
export class MangaEffects {
  getAllMangas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MangaActions.GET_MANGAS.type),
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
      ofType(MangaActions.SELECT_MANGA_BY_ID.type),
      mergeMap(({ mangaId, attributes }) =>
        this._mangaService.getMangaById(mangaId, attributes).pipe(
          map((data) =>
            MangaActions.SELECT_MANGA_BY_ID_SUCCESS({
              mangaSelected: data.at(0),
            })
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

  constructor(private actions$: Actions, private _mangaService: MangaService) {}
}
