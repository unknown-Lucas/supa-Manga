import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MangaReducerState } from './mangas.state';

export const selectAuthFeature =
  createFeatureSelector<MangaReducerState>('MangaModule');

export const selectMangaCollection = createSelector(
  selectAuthFeature,
  (state: MangaReducerState) => {
    return state.manga.mangaCollection.collection;
  }
);

export const selectIsMangaLoading = createSelector(
  selectAuthFeature,
  (state: MangaReducerState) => {
    return state.manga.mangaCollection.loading;
  }
);

export const selectIsMangaSelectedLoading = createSelector(
  selectAuthFeature,
  (state: MangaReducerState) => {
    return state.manga.mangaSelected.loading;
  }
);

export const selectMangaSelected = createSelector(
  selectAuthFeature,
  (state: MangaReducerState) => {
    return state.manga.mangaSelected.mangaSelected;
  }
);

export const selectMangaChapters = createSelector(
  selectAuthFeature,
  (state: MangaReducerState) => {
    return state.chapters.chapterCollection.chapter;
  }
);

export const selectisMangaChaptersLoading = createSelector(
  selectAuthFeature,
  (state: MangaReducerState) => {
    return state.chapters.chapterCollection.loading;
  }
);
