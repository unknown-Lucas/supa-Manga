import { createAction, props } from '@ngrx/store';
import { MangaLike } from 'src/app/core/models/likes.model';

export namespace LikesActions {
  export const GET_LIKED_MANGAS = createAction(
    '[LIKES] LIKE A MANGA',
    props<{ userUID: string }>()
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
