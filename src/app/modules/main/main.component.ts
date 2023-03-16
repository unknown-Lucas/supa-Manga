import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaCardComponent } from 'src/app/shared/components/manga-card/manga-card.component';
import { Store } from '@ngrx/store';
import { MangaActions } from 'src/app/core/state/mangas/mangas.actions';
import {
  selectIsMangaLoading,
  selectMangaCollection,
} from 'src/app/core/state/mangas/mangas.selector';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MangaDetailsComponent } from 'src/app/shared/components/manga-details/manga-details.component';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MangaCardComponent, MatProgressBarModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  mangasCollection$;
  isMangaLoading$;

  constructor(
    private _store: Store,
    private _route: ActivatedRoute,
    private _bottomSheet: MatBottomSheet
  ) {
    this.mangasCollection$ = this._store.select(selectMangaCollection);
    this.isMangaLoading$ = this._store.select(selectIsMangaLoading);
  }

  ngOnInit(): void {
    const magaAttributes = ['cover', 'description', 'title', 'state', '_id'];
    this._store.dispatch(
      MangaActions.GET_MANGAS({ attributes: magaAttributes })
    );
    const isMangaSelected = this._route.snapshot.paramMap.get('mangaId');
    if (isMangaSelected !== null) {
      this._store.dispatch(
        MangaActions.SELECT_MANGA_BY_ID({
          attributes: [],
          mangaId: Number(isMangaSelected),
        })
      );
      this._bottomSheet.open(MangaDetailsComponent);
    }
  }
}
