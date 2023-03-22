import { ActionReducerMap } from '@ngrx/store';
import { chapterReducer, ChapterState } from '../chapters/chapters.reducer';
import { mangaReducer, MangaState } from './mangas.reducer';

export interface MangaReducerState {
  manga: MangaState;
  chapters: ChapterState;
}

export const MANGA_REDUCERS: ActionReducerMap<MangaReducerState> = {
  manga: mangaReducer,
  chapters: chapterReducer,
};
