import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { NotificationActions } from '../notifications/notifications.actions';
import { LikesService } from 'src/app/core/services/likes.service';
import { MangaLikesActions } from './mangaLikes.actions';

@Injectable()
export class mangaLikesEffects {
  getAllMangaLikes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MangaLikesActions.GET_LIKED_MANGAS),
      mergeMap(({ userUID }) =>
        this._likesService.getUserMangaLikes(userUID).pipe(
          map((data) =>
            MangaLikesActions.GET_LIKED_MANGAS_SUCCESS({ likes: data })
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

  postMangaLike$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MangaLikesActions.LIKE_A_MANGA),
      mergeMap(({ mangaId, userUID }) =>
        this._likesService.postMangaLike({ userId: userUID, mangaId }).pipe(
          map((uploadedLike) => {
            return MangaLikesActions.LIKE_A_MANGA_SUCCESS({
              likedManga: mangaId,
            });
          })
        )
      )
    );
  });

  unlikeManga$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MangaLikesActions.UNLIKE_A_MANGA),
      mergeMap(({ mangaId, userUID }) =>
        this._likesService.mangaUnlike({ userId: userUID, mangaId }).pipe(
          map(() => {
            return MangaLikesActions.UNLIKE_A_MANGA_SUCCESS({
              mangaId,
            });
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private _likesService: LikesService) {}
}
