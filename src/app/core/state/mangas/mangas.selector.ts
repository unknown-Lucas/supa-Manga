import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MangaReducerState } from './mangas.state';

export const selectAuthFeature =
  createFeatureSelector<MangaReducerState>('MangaModule');

export const selectMangaCollection = createSelector(
  selectAuthFeature,
  (state: MangaReducerState) => {
    return state.manga.mangaCollection;
  }
);

export const selectIsMangaLoading = createSelector(
  selectAuthFeature,
  (state: MangaReducerState) => {
    return state.manga.loading;
  }
);
