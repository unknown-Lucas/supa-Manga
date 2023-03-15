import { createReducer, on } from '@ngrx/store';
import { MangaModel } from '../../models/manga.model';
import { MangaActions } from './mangas.actions';

export interface MangaState {
  mangaCollection: MangaModel[];
  loading: boolean;
}

const initialState: MangaState = {
  mangaCollection: [],
  loading: false,
};

export const mangaReducer = createReducer<MangaState>(
  initialState,
  on(MangaActions.GET_ALL_MANGAS, (state) => {
    return { ...state, loading: true };
  }),
  on(MangaActions.GET_ALL_MANGAS_SUCCESS, (state, { mangaCollection }) => {
    return { ...state, loading: false, mangaCollection };
  })
);
