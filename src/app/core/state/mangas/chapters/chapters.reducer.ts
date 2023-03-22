import { createReducer, on } from '@ngrx/store';
import { ChapterModel } from 'src/app/core/models/chapters.model';
import { MangaActions } from '../mangas/mangas.actions';
import { ChapterActions } from './chapters.actions';

export interface ChapterState {
  chapterCollection: { collection: ChapterModel[]; loading: boolean };
}

const initialState: ChapterState = {
  chapterCollection: { collection: [], loading: false },
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
  on(
    ChapterActions.GET_MANGA_CHAPTERS_SUCCESS,
    (state, { chaptersCollection }) => {
      return {
        ...initialState,
        chapterCollection: {
          ...state.chapterCollection,
          collection: chaptersCollection,
          loading: false,
        },
      };
    }
  ),
  on(MangaActions.RESET_SELECTED_MANGA, (state) => {
    return {
      ...initialState,
      chapterCollection: {
        ...state.chapterCollection,
        collection: [],
        loading: false,
      },
    };
  })
);
