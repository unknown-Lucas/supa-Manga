import { createSelector } from '@ngrx/store';
import { selectMangaFeature } from '../mangas/mangas.selectors';
import { MangaReducerState } from '../mangas/mangas.state';

export const selectIsMangaChaptersLoading = createSelector(
  selectMangaFeature,
  (state: MangaReducerState) => {
    return state.chapters.chapterCollection.loading;
  }
);

export const selectChapterImages = createSelector(
  selectMangaFeature,
  (state: MangaReducerState) => {
    return state.chapters.selectedChapter.images;
  }
);

export const selectIsChapterImagesLoading = createSelector(
  selectMangaFeature,
  (state: MangaReducerState) => {
    return state.chapters.selectedChapter.loading;
  }
);

export const selectMangaChapters = createSelector(
  selectMangaFeature,
  (state: MangaReducerState) => {
    return state.chapters.chapterCollection.chapter;
  }
);
