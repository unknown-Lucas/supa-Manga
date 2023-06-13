import { createAction, props } from '@ngrx/store';
import { MangaModel } from '../../../models/manga.model';

export namespace MangaActions {
  export const GET_MANGAS = createAction(
    '[MANGAS] GET ALL MANGAS',
    props<{ attributes: string[] }>()
  );

  export const GET_ALL_MANGAS_SUCCESS = createAction(
    '[MANGAS] GET ALL MANGAS SUCCESS',
    props<{ mangaCollection: MangaModel[] }>()
  );

  export const SELECT_MANGA_BY_ID = createAction(
    '[MANGAS] SELECT MANGA BY ID',
    props<{
      mangaId: number;
      attributes: string[];
    }>()
  );

  export const RESET_SELECTED_MANGA = createAction(
    '[MANGAS] RESET SELECTED MANGA'
  );

  export const SELECT_MANGA_BY_ID_SUCCESS = createAction(
    '[MANGAS] SELECT MANGA BY ID SUCCESS',
    props<{
      mangaSelected?: MangaModel;
    }>()
  );

  export const GET_MANGAS_BY_RANGE = createAction(
    '[MANGAS] GET MANGAS BY RANGE',
    props<{
      start: number;
      end: number;
      attributes: string[];
      where?: Partial<MangaModel>;
    }>()
  );

  export const GET_MANGAS_BY_RANGE_SUCCESS = createAction(
    '[MANGAS] GET MANGAS BY RANGE SUCCESS',
    props<{ mangaCollection: MangaModel[] }>()
  );

  export const CREATE_MANGA = createAction(
    '[MANGAS] CREATE MANGA',
    props<{ manga: MangaModel }>()
  );

  export const CREATE_MANGA_SUCCESS = createAction(
    '[MANGAS] CREATE MANGA SUCCESS',
    props<{ manga: MangaModel }>()
  );
}
