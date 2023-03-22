import { createReducer, on } from '@ngrx/store';
import { MangaModel } from 'src/app/core/models/manga.model';
import { MangaActions } from './mangas.actions';

export interface MangaState {
  mangaCollection: { collection: MangaModel[]; loading: boolean };
  mangaSelected: { mangaSelected?: MangaModel; loading: boolean };
}

const initialState: MangaState = {
  mangaCollection: { collection: [], loading: false },
  mangaSelected: { mangaSelected: undefined, loading: false },
};

export const mangaReducer = createReducer<MangaState>(
  initialState,
  on(MangaActions.GET_MANGAS, (state) => {
    return {
      ...state,
      mangaCollection: {
        ...state.mangaCollection,
        loading: true,
        collection: state.mangaCollection.collection,
      },
    };
  }),
  on(MangaActions.GET_ALL_MANGAS_SUCCESS, (state, { mangaCollection }) => {
    return {
      ...state,
      mangaCollection: {
        ...state.mangaCollection,
        collection: mangaCollection,
        loading: false,
      },
    };
  }),
  on(MangaActions.SELECT_MANGA_BY_ID, (state) => {
    return {
      ...state,
      mangaSelected: {
        ...state.mangaSelected,
        loading: true,
      },
    };
  }),
  on(MangaActions.SELECT_MANGA_BY_ID_SUCCESS, (state, { mangaSelected }) => {
    return {
      ...state,
      mangaSelected: {
        mangaSelected,
        loading: false,
      },
    };
  }),
  on(MangaActions.RESET_SELECTED_MANGA, (state) => {
    return {
      ...state,
      mangaSelected: {
        mangaSelected: undefined,
        loading: false,
      },
    };
  })
);
