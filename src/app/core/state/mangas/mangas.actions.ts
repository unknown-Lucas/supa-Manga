import { createAction, props } from '@ngrx/store';
import { MangaModel } from '../../models/manga.model';

export namespace MangaActions {
  export const GET_ALL_MANGAS = createAction('[MANGA SELECT *] GET ALL MANGAS');

  export const GET_ALL_MANGAS_SUCCESS = createAction(
    '[MANGA SELECT] GET ALL MANGAS SUCCESS',
    props<{ mangaCollection: MangaModel[] }>()
  );

  export const GET_MANGAS_BY_RANGE = createAction(
    '[MANGA PAGINATION] GET MANGAS BY RANGE',
    props<{ start: number; end: number }>()
  );

  export const GET_MANGAS_BY_RANGE_SUCCESS = createAction(
    '[MANGA PAGINATION] GET MANGAS BY RANGE SUCCESS',
    props<{ mangaCollection: MangaModel[] }>()
  );

  export const CREATE_MANGA = createAction(
    '[MANGA CREATE] CREATE MANGA',
    props<{ manga: MangaModel }>()
  );

  export const CREATE_MANGA_SUCCESS = createAction(
    '[MANGA CREATE] CREATE MANGA SUCCESS',
    props<{ manga: MangaModel }>()
  );
}
