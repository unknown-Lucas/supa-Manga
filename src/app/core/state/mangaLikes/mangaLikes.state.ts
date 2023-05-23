import { ActionReducerMap } from '@ngrx/store';
import { mangaLikesReducer, mangaLikesState } from './mangaLikes.reducer';

export interface MangaLikesReducerState {
  mangaLikes: mangaLikesState;
}

export const LIKES_REDUCERS: ActionReducerMap<MangaLikesReducerState> = {
  mangaLikes: mangaLikesReducer,
};
