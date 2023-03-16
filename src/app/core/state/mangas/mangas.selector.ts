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

export const selectMangaById = (mangaId: number) => {
  return createSelector(selectAuthFeature, (state: MangaReducerState) => {
    const mangaCollection = state.manga.mangaCollection;
    const manga = mangaCollection.find((manga) => manga._id === mangaId);
    return manga;
  });
};
