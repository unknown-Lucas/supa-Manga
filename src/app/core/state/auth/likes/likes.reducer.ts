import { createReducer, on } from '@ngrx/store';
import { MangaLike } from 'src/app/core/models/likes.model';
import { LikesActions } from './likes.actions';

export interface LikesState {
  mangaLikes: { loading: boolean; collection: MangaLike[] };
}

const initialState: LikesState = {
  mangaLikes: { loading: false, collection: [] },
};

const LikesReducer = createReducer(
  initialState,
  on(LikesActions.LIKE_A_MANGA, (state) => {
    return { ...state, mangaLikes: { ...state.mangaLikes, loading: true } };
  }),
  on(LikesActions.UNLIKE_A_MANGA, (state) => {
    return { ...state, mangaLikes: { ...state.mangaLikes, loading: true } };
  })
);
