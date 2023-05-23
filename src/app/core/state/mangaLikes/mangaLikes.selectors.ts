import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MangaLikesReducerState } from './mangaLikes.state';

export const selectLikesFeature =
  createFeatureSelector<MangaLikesReducerState>('LikesModule');

export const selectUserLikedMangas = createSelector(
  selectLikesFeature,
  (state: MangaLikesReducerState) => {
    return state.mangaLikes.likedMangas;
  }
);

export const isUserLikeLoading = createSelector(
  selectLikesFeature,
  (state: MangaLikesReducerState) => {
    return state.mangaLikes.loading;
  }
);
