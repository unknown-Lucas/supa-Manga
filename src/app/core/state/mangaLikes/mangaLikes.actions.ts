import { createAction, props } from '@ngrx/store';
import { MangaLike } from 'src/app/core/models/likes.model';

export namespace MangaLikesActions {
  export const GET_LIKED_MANGAS = createAction(
    '[LIKES] GET LIKED MANGAS',
    props<{ userUID: string }>()
  );

  export const GET_LIKED_MANGAS_SUCCESS = createAction(
    '[LIKES] GET LIKED MANGAS SUCCESS',
    props<{ likes: MangaLike[] }>()
  );

  export const LIKE_A_MANGA = createAction(
    '[LIKES] LIKE A MANGA',
    props<MangaLike>()
  );

  export const LIKE_A_MANGA_SUCCESS = createAction(
    '[LIKES] LIKE A MANGA SUCCESS',
    props<MangaLike>()
  );

  export const UNLIKE_A_MANGA = createAction(
    '[LIKES] UNLIKE A MANGA',
    props<MangaLike>()
  );

  export const UNLIKE_A_MANGA_SUCCESS = createAction(
    '[LIKES] UNLIKE A MANGA SUCCESS',
    props<MangaLike>()
  );
}
