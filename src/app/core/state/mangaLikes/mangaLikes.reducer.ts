import { createReducer, on } from '@ngrx/store';
import { MangaLikesActions } from './mangaLikes.actions';

export interface mangaLikesState {
  loading: boolean;
  likedMangas: Set<number>;
}

const initialState: mangaLikesState = {
  loading: false,
  likedMangas: new Set(),
};

export const mangaLikesReducer = createReducer(
  initialState,
  on(MangaLikesActions.LIKE_A_MANGA, (state) => {
    return { ...state, loading: true };
  }),
  on(MangaLikesActions.GET_LIKED_MANGAS_SUCCESS, (state, { likes }) => {
    return {
      loading: false,
      likedMangas: new Set([...likes].map((a) => a.mangaId)),
    };
  }),
  on(MangaLikesActions.LIKE_A_MANGA, (state) => {
    return { ...state, loading: true };
  }),
  on(MangaLikesActions.UNLIKE_A_MANGA, (state) => {
    return { ...state, loading: true };
  })
);
