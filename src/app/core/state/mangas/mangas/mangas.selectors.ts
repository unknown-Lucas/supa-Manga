import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MangaReducerState } from './mangas.state';

export const selectMangaFeature =
  createFeatureSelector<MangaReducerState>('MangaModule');

export const selectMangaCollection = createSelector(
  selectMangaFeature,
  (state: MangaReducerState) => {
    return state.manga.libraryCollection.collection;
  }
);

export const selectIsMangaLoading = createSelector(
  selectMangaFeature,
  (state: MangaReducerState) => {
    return state.manga.libraryCollection.loading;
  }
);

export const selectIsMangaSelectedLoading = createSelector(
  selectMangaFeature,
  (state: MangaReducerState) => {
    return state.manga.mangaSelected.loading;
  }
);

export const selectMangaSelected = createSelector(
  selectMangaFeature,
  (state: MangaReducerState) => {
    return state.manga.mangaSelected.mangaSelected;
  }
);

export const selectIsMangaSelected = createSelector(
  selectMangaFeature,
  (state: MangaReducerState) => {
    return Boolean(state.manga.libraryCollection.collection.length);
  }
);
