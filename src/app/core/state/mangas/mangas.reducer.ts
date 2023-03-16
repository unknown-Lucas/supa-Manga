import { createReducer, on } from '@ngrx/store';
import { MangaModel } from '../../models/manga.model';
import { MangaActions } from './mangas.actions';

export interface MangaState {
  mangaCollection: MangaModel[];
  mangaSelected: { mangaSelected?: MangaModel; loading: boolean };
  loading: boolean;
}

const initialState: MangaState = {
  mangaCollection: [],
  mangaSelected: { mangaSelected: undefined, loading: false },
  loading: false,
};

export const mangaReducer = createReducer<MangaState>(
  initialState,
  on(MangaActions.GET_MANGAS, (state) => {
    return { ...state, loading: true };
  }),
  on(MangaActions.GET_ALL_MANGAS_SUCCESS, (state, { mangaCollection }) => {
    return { ...state, loading: false, mangaCollection };
  }),
  on(MangaActions.SELECT_MANGA_BY_ID, (state) => {
    return {
      ...state,
      loading: false,
      mangaSelected: { mangaSelected: undefined, loading: true },
    };
  }),
  on(MangaActions.SELECT_MANGA_BY_ID_SUCCESS, (state, { mangaSelected }) => {
    return {
      ...state,
      loading: false,
      mangaSelected: { mangaSelected: mangaSelected, loading: false },
    };
  })
);
