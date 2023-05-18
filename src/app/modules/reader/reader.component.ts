import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ChapterActions } from 'src/app/core/state/mangas/chapters/chapters.actions';
import {
  selectChapterImages,
  selectIsChapterImagesLoading,
  selectMangaChapters,
} from 'src/app/core/state/mangas/mangas/mangas.selectors';
import { BehaviorSubject, filter, take } from 'rxjs';
import { MangaActions } from 'src/app/core/state/mangas/mangas/mangas.actions';
import { modules } from './m';
import { ChaptersStore } from 'src/app/core/state/mangas/chapters/chapters.store';
import { MangaStore } from 'src/app/core/state/mangas/mangas/mangas.store';

@Component({
  standalone: true,
  imports: [...modules],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export class ReaderComponent implements OnInit {
  private mangaId: number;
  chapterCode: string | null;
  images$;
  chapters$;
  chaptersLoading$;
  loading$;
  nextChapter = new BehaviorSubject<string>('');
  lastChapter = new BehaviorSubject<string>('');

  constructor(
    private _chapterStore: ChaptersStore,
    private _mangaStore: MangaStore,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.mangaId = Number(
      this._route.snapshot.paramMap.get('mangaId')
    ) as number;
    if (isNaN(this.mangaId)) this._router.navigate(['']);
    this.chapterCode = this._route.snapshot.paramMap.get('code');
    if (!this.chapterCode) this._router.navigate(['']);
    this.images$ = this._chapterStore.chapterImages$;
    this.loading$ = this._chapterStore.chapterImagesLoading$;
    this.chapters$ = this._chapterStore.mangaChapters$;
    this.chaptersLoading$ = this._chapterStore.isMangaChaptersLoading$;
  }

  ngOnInit(): void {
    this._mangaStore.selectMangaById({
      mangaId: this.mangaId,
      attributes: [],
    });

    this._chapterStore.getChapterImages(this.chapterCode ?? '');

    this.chapters$
      .pipe(filter((chapter) => Boolean(chapter)))
      .pipe(take(1))
      .subscribe((chapter) => {
        const actualChapterIndex =
          chapter?.chapterCodes.findIndex((code) => {
            return code === this.chapterCode;
          }) ?? 0;

        this.nextChapter.next(
          chapter?.chapterCodes[actualChapterIndex + 1] ?? ''
        );

        this.lastChapter.next(
          chapter?.chapterCodes[actualChapterIndex - 1] ?? ''
        );
      });
  }
  goToLastChapter() {
    this.lastChapter
      .pipe(take(1))
      .subscribe((code: string) =>
        this._router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
            this._router.navigate([`/reader/${this.mangaId}/${code}`])
          )
      );
  }

  goToNextChapter() {
    this.nextChapter
      .pipe(take(1))
      .subscribe((code: string) =>
        this._router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
            this._router.navigate([`/reader/${this.mangaId}/${code}`])
          )
      );
  }
}
