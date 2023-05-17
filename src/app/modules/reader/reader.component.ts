import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ChapterActions } from 'src/app/core/state/mangas/chapters/chapters.actions';
import {
  selectChapterImages,
  selectIsChapterImagesLoading,
  selectMangaChapters,
  selectisMangaChaptersLoading,
} from 'src/app/core/state/mangas/mangas/mangas.selectors';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject, ReplaySubject, filter, take, takeUntil } from 'rxjs';
import { MangaActions } from 'src/app/core/state/mangas/mangas/mangas.actions';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
  ],
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
    private _route: ActivatedRoute,
    private _router: Router,
    private _store: Store
  ) {
    this.mangaId = Number(
      this._route.snapshot.paramMap.get('mangaId')
    ) as number;
    if (isNaN(this.mangaId)) this._router.navigate(['']);
    this.chapterCode = this._route.snapshot.paramMap.get('code');
    if (!this.chapterCode) this._router.navigate(['']);
    this.images$ = this._store.select(selectChapterImages);
    this.loading$ = this._store.select(selectIsChapterImagesLoading);
    this.chapters$ = this._store.select(selectMangaChapters);
    this.chaptersLoading$ = this._store.select(selectisMangaChaptersLoading);
  }

  ngOnInit(): void {
    this._store.dispatch(
      MangaActions.SELECT_MANGA_BY_ID({
        mangaId: this.mangaId,
        attributes: [],
      })
    );

    this._store.dispatch(
      ChapterActions.GET_MANGA_CHAPTERS_IMAGES({
        chapterCode: this.chapterCode ?? '',
      })
    );

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
