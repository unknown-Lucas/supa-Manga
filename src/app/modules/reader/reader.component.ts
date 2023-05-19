import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject, filter, take, takeUntil } from 'rxjs';
import { modules } from './m';
import { ChaptersStore } from 'src/app/core/state/mangas/chapters/chapters.store';
import { MangaStore } from 'src/app/core/state/mangas/mangas/mangas.store';

@Component({
  standalone: true,
  imports: [...modules],
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export class ReaderComponent implements OnInit, OnDestroy {
  mangaId: number;
  chapterCode: string | null;
  images$;
  chapters$;
  chaptersLoading$;
  loading$;
  nextChapter = '';
  lastChapter = '';
  destroy$ = new ReplaySubject();
  constructor(
    private _chapterStore: ChaptersStore,
    private _mangaStore: MangaStore,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.mangaId = Number(
      this._route.snapshot.paramMap.get('mangaId')
    ) as number;
    if (isNaN(this.mangaId)) this._router.navigate(['home']);
    this.chapterCode = this._route.snapshot.paramMap.get('code');
    if (!this.chapterCode) this._router.navigate(['home']);
    this.images$ = this._chapterStore.chapterImages$;
    this.loading$ = this._chapterStore.chapterImagesLoading$;
    this.chapters$ = this._chapterStore.mangaChapters$;
    this.chaptersLoading$ = this._chapterStore.isMangaChaptersLoading$;
  }

  ngOnInit(): void {
    this._chapterStore.getChapterImages(this.chapterCode ?? '');
    this.chapters$
      .pipe(filter((a) => !Boolean(a)))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        console.log('loading manga....');
        this._mangaStore.selectMangaById({
          mangaId: this.mangaId,
          attributes: ['*'],
        });
      });

    this.chapters$.pipe(take(1)).subscribe((chapter) => {
      const actualChapterIndex =
        chapter?.chapterCodes.findIndex((code) => {
          return code === this.chapterCode;
        }) ?? 0;

      this.nextChapter = chapter!.chapterCodes[actualChapterIndex + 1];

      this.lastChapter = chapter!.chapterCodes[actualChapterIndex - 1];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
