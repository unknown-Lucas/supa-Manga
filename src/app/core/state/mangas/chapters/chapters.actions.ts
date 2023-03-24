import { createAction, props } from '@ngrx/store';
import { ChapterModel } from 'src/app/core/models/chapters.model';

export namespace ChapterActions {
  export const GET_MANGA_CHAPTERS = createAction(
    '[MANGA CHAPTERS] GET CHAPTERS FROM A MANGA',
    props<{ mangaId: number; attributes: string[] }>()
  );

  export const GET_MANGA_CHAPTERS_SUCCESS = createAction(
    '[MANGA CHAPTERS] GET CHAPTERS FROM A MANGA SUCCESS',
    props<{ chapter?: ChapterModel }>()
  );
}
