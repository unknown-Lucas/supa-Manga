import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectChapterImages,
  selectIsChapterImagesLoading,
  selectIsMangaChaptersLoading,
  selectMangaChapters,
} from '../mangas/mangas.selectors';
import { ChapterActions } from './chapters.actions';

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
    return this._store.dispatch(ChapterActions.GET_MANGA_CHAPTERS(params));
  }

  public getChapterImages(chapterCode: string) {
    return this._store.dispatch(
      ChapterActions.GET_MANGA_CHAPTERS_IMAGES({ chapterCode })
    );
  }
}
