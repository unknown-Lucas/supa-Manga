import { createAction, props } from '@ngrx/store';
import { MangaModel } from '../../../models/manga.model';

export namespace MangaActions {
  export const GET_MANGAS = createAction(
    '[MANGA SELECT QUERY] GET ALL MANGAS',
    props<{ attributes: string[] }>()
  );

  export const GET_ALL_MANGAS_SUCCESS = createAction(
    '[MANGA SELECT] GET ALL MANGAS SUCCESS',
    props<{ mangaCollection: MangaModel[] }>()
  );

  export const SELECT_MANGA_BY_ID = createAction(
    '[MANGA SELECT] SELECT MANGA BY ID',
    props<{
      mangaId: number;
      attributes: string[];
    }>()
  );

  export const RESET_SELECTED_MANGA = createAction(
    '[MANGA SELECT] RESET SELECTED MANGA'
  );

  export const SELECT_MANGA_BY_ID_SUCCESS = createAction(
    '[MANGA SELECT] SELECT MANGA BY ID SUCCESS',
    props<{
      mangaSelected?: MangaModel;
    }>()
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
