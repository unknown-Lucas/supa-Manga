import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaCardComponent } from 'src/app/shared/components/manga/manga-card/manga-card.component';
import { Store } from '@ngrx/store';
import { MangaActions } from 'src/app/core/state/mangas/mangas/mangas.actions';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MangaDetailsComponent } from 'src/app/shared/components/manga/manga-details/manga-details.component';
import {
  selectIsMangaLoading,
  selectMangaCollection,
} from 'src/app/core/state/mangas/mangas/mangas.selectors';

@Component({
  standalone: true,
  imports: [CommonModule, MangaCardComponent, MatProgressBarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mangasCollection$;
  isMangaLoading$;
  isMangaSelected;
  constructor(
    private _store: Store,
    private _route: ActivatedRoute,
    private _bottomSheet: MatBottomSheet
  ) {
    this.mangasCollection$ = this._store.select(selectMangaCollection);
    this.isMangaLoading$ = this._store.select(selectIsMangaLoading);
    this.isMangaSelected = this._route.snapshot.paramMap.get('mangaId');
  }

  ngOnInit(): void {
    const magaAttributes = [
      'cover',
      'description',
      'title',
      'state',
      'genre',
      '_id',
    ];
    this._store.dispatch(
      MangaActions.GET_MANGAS({ attributes: magaAttributes })
    );
    if (
      new RegExp('^[0-9,$]*$').test(this?.isMangaSelected ?? '') &&
      this?.isMangaSelected
    ) {
      this.openMangaDetails(Number(this.isMangaSelected));
    }
  }

  openMangaDetails(id: number) {
    this._store.dispatch(
      MangaActions.SELECT_MANGA_BY_ID({
        attributes: [],
        mangaId: Number(id),
      })
    );
    this._bottomSheet.open(MangaDetailsComponent);
  }
}
