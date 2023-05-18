import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MangaStore } from 'src/app/core/state/mangas/mangas/mangas.store';
import { modules } from './m';

@Component({
  selector: 'app-reader-actions',
  standalone: true,
  imports: [...modules],
  templateUrl: './readerActions.component.html',
  styleUrls: ['./readerActions.component.scss'],
})
export class ReaderActionsComponent {
  @Input()
  mangaId: number = 0;

  @Input()
  nextChapter: string = '';

  @Input()
  lastChapter: string = '';

  constructor(private _mangaStore: MangaStore, private _router: Router) {}

  goToLastChapter() {
    this._router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this._router.navigate([`/reader/${this.mangaId}/${this.lastChapter}`])
      );
  }

  openManga() {
    this._mangaStore.selectMangaById({
      mangaId: this.mangaId,
      attributes: [],
    });
  }

  goToNextChapter() {
    this._router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this._router.navigate([`/reader/${this.mangaId}/${this.nextChapter}`])
      );
  }
}
