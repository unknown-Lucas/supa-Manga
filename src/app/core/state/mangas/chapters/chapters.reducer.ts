import { createReducer, on } from '@ngrx/store';
import { ChapterModel } from 'src/app/core/models/chapters.model';
import { MangaActions } from '../mangas/mangas.actions';
import { ChapterActions } from './chapters.actions';

export interface ChapterState {
  chapterCollection: { chapter?: ChapterModel; loading: boolean };
}

const initialState: ChapterState = {
  chapterCollection: {
    loading: false,
  },
};

export const chapterReducer = createReducer<ChapterState>(
  initialState,
  on(ChapterActions.GET_MANGA_CHAPTERS, (state) => {
    return {
      ...initialState,
      chapterCollection: {
        ...state.chapterCollection,
        loading: true,
      },
    };
  }),
  on(ChapterActions.GET_MANGA_CHAPTERS_SUCCESS, (state, { chapter }) => {
    return {
      ...initialState,
      chapterCollection: {
        ...state.chapterCollection,
        chapter: chapter,
        loading: false,
      },
    };
  }),
  on(MangaActions.RESET_SELECTED_MANGA, (state) => {
    return {
      ...initialState,
      c: {
        ...state.chapterCollection,
        chapter: undefined,
        loading: false,
      },
    };
  })
);
