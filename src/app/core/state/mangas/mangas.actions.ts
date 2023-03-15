import { createAction, props } from '@ngrx/store';
import { userModel } from '../../models/auth.model';

export namespace MangaActions {
  export const GET_ALL_MANGAS = createAction('[MANGA SELECT *] GET ALL MANGAS');

  export const GET_ALL_MANGAS_SUCCESS = createAction(
    '[MANGA SELECT] GET ALL MANGAS SUCCESS',
    props<{ user: userModel }>()
  );

  export const GET_MANGAS_BY_RANGE = createAction(
    '[MANGA PAGINATION] GET MANGAS BY RANGE',
    props<{ start: number; end: number }>()
  );

  export const GET_MANGAS_BY_RANGE_SUCCESS = createAction(
    '[MANGA PAGINATION] GET MANGAS BY RANGE SUCCESS',
    props<{ start: number; end: number }>()
  );
}
