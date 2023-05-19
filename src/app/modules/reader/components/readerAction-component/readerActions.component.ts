import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MangaStore } from 'src/app/core/state/mangas/mangas/mangas.store';
import { modules } from './m';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MangaDetailsComponent } from 'src/app/shared/components/manga/manga-details/manga-details.component';

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

  constructor(private _bottomSheet: MatBottomSheet, private _router: Router) {}

  goToLastChapter() {
    this._router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this._router.navigate([`/reader/${this.mangaId}/${this.lastChapter}`])
      );
  }

  openManga() {
    this._bottomSheet.open(MangaDetailsComponent);
  }

  goToNextChapter() {
    this._router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this._router.navigate([`/reader/${this.mangaId}/${this.nextChapter}`])
      );
  }
}
