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
  on(MangaLikesActions.LIKE_A_MANGA_SUCCESS, (state, { likedManga }) => {
    return {
      ...state,
      loading: false,
      likedMangas: new Set([...state.likedMangas, likedManga]),
    };
  }),
  on(MangaLikesActions.GET_LIKED_MANGAS_SUCCESS, (state, { likes }) => {
    const likeId = likes.map((a) => a.mangaId);
    return {
      loading: false,
      likedMangas: new Set(likeId),
    };
  }),

  on(MangaLikesActions.UNLIKE_A_MANGA, (state) => {
    return { ...state, loading: true };
  }),
  on(MangaLikesActions.UNLIKE_A_MANGA_SUCCESS, (state, { mangaId }) => {
    return {
      ...state,
      loading: false,
      likedMangas: new Set([...state.likedMangas].filter((a) => a !== mangaId)),
    };
  })
);
