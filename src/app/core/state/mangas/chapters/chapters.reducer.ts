import { createReducer, on } from '@ngrx/store';
import { ChapterModel } from 'src/app/core/models/chapters.model';
import { MangaActions } from '../mangas/mangas.actions';
import { ChapterActions } from './chapters.actions';

export interface ChapterState {
  chapterCollection: { chapter?: ChapterModel; loading: boolean };
  selectedChapter: {
    loading: boolean;
    images: string[];
  };
}

const initialState: ChapterState = {
  chapterCollection: {
    loading: false,
  },
  selectedChapter: {
    loading: false,
    images: [],
  },
};

export const chapterReducer = createReducer<ChapterState>(
  initialState,
  on(ChapterActions.GET_MANGA_CHAPTERS, (state) => {
    return {
      ...state,
      chapterCollection: {
        images: [],
        loading: true,
      },
    };
  }),
  on(ChapterActions.GET_MANGA_CHAPTERS_SUCCESS, (state, { chapter }) => {
    return {
      ...state,
      chapterCollection: {
        ...state.chapterCollection,
        chapter: {
          ...chapter,
          chapterCodes: chapter?.chapterCodes ?? [],
        },
        loading: false,
      },
    };
  }),

  on(MangaActions.RESET_SELECTED_MANGA, (state) => {
    return { ...initialState, selectedChapter: { ...state.selectedChapter } };
  }),

  on(ChapterActions.GET_MANGA_CHAPTERS_IMAGES, (state) => {
    return {
      ...state,
      selectedChapter: { ...state.selectedChapter, loading: true },
    };
  }),
  on(
    ChapterActions.GET_MANGA_CHAPTERS_IMAGES_SUCCESS,
    (state, { imagesData }) => {
      const images = (
        imagesData?.chapter?.dataSaver ?? imagesData?.chapter?.data
      ).map((data: any) => {
        return `${imagesData.baseUrl}/${
          imagesData?.chapter?.dataSaver ? 'data-saver' : 'data'
        }/${imagesData?.chapter.hash}/${data}`;
      });
      return {
        ...state,
        selectedChapter: {
          ...state.selectedChapter,
          loading: false,
          images: images,
        },
      };
    }
  )
);
