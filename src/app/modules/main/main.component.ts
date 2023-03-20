import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaCardComponent } from 'src/app/shared/components/manga/manga-card/manga-card.component';
import { Store } from '@ngrx/store';
import { MangaActions } from 'src/app/core/state/mangas/mangas.actions';
import {
  selectIsMangaLoading,
  selectMangaCollection,
} from 'src/app/core/state/mangas/mangas.selector';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { take } from 'rxjs';
import { MangaDetailsComponent } from 'src/app/shared/components/manga/manga-details/manga-details.component';

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

    if (new RegExp('^[0-9,$]*$').test(this?.isMangaSelected ?? '')) {
      this._store.dispatch(
        MangaActions.SELECT_MANGA_BY_ID({
          attributes: [],
          mangaId: Number(this.isMangaSelected),
        })
      );
      this._bottomSheet
        .open(MangaDetailsComponent)
        .afterDismissed()
        .pipe(take(1))
        .subscribe(() =>
          this._store.dispatch(MangaActions.RESET_SELECTED_MANGA())
        );
    }
  }
}
