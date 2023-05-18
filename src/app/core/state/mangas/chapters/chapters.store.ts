import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChapterActions } from './chapters.actions';
import {
  selectChapterImages,
  selectIsChapterImagesLoading,
  selectIsMangaChaptersLoading,
  selectMangaChapters,
} from './chapter.selectors';

@Injectable({
  providedIn: 'root',
})
export class ChaptersStore {
  mangaChapters$;
  isMangaChaptersLoading$;
  chapterImages$;
  chapterImagesLoading$;

  constructor(private _store: Store) {
    this.mangaChapters$ = this._store.select(selectMangaChapters);
    this.isMangaChaptersLoading$ = this._store.select(
      selectIsMangaChaptersLoading
    );
    this.chapterImages$ = this._store.select(selectChapterImages);
    this.chapterImagesLoading$ = this._store.select(
      selectIsChapterImagesLoading
    );
  }

  public getChapters({ ...params }: { mangaId: number; attributes: string[] }) {
    this._store.dispatch(ChapterActions.GET_MANGA_CHAPTERS(params));
  }

  public getChapterImages(chapterCode: string) {
    this._store.dispatch(
      ChapterActions.GET_MANGA_CHAPTERS_IMAGES({ chapterCode })
    );
  }
}
