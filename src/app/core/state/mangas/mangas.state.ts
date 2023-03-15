import { ActionReducerMap } from '@ngrx/store';
import { mangaReducer, MangaState } from './mangas.reducer';

export interface MangaReducerState {
  manga: MangaState;
}

export const MANGA_REDUCERS: ActionReducerMap<MangaReducerState> = {
  manga: mangaReducer,
};
