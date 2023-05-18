import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MangaActions } from 'src/app/core/state/mangas/mangas/mangas.actions';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MangaDetailsComponent } from 'src/app/shared/components/manga/manga-details/manga-details.component';
import {
  selectIsMangaLoading,
  selectMangaCollection,
} from 'src/app/core/state/mangas/mangas/mangas.selectors';
import { modules } from './m';
import { MangaStore } from 'src/app/core/state/mangas/mangas/mangas.store';

@Component({
  standalone: true,
  imports: [...modules],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mangasCollection$;
  isMangaLoading$;
  isMangaSelected;
  constructor(
    private _MangaStore: MangaStore,
    private _route: ActivatedRoute,
    private _bottomSheet: MatBottomSheet
  ) {
    this.mangasCollection$ = this._MangaStore.mangaCollection$;
    this.isMangaLoading$ = this._MangaStore.isMangaCollectionLoading$;
    this.isMangaSelected = this._route.snapshot.paramMap.get('mangaId');
  }

  ngOnInit(): void {
    const mangaAttributes = [
      'cover',
      'description',
      'title',
      'state',
      'genre',
      '_id',
    ];
    this._MangaStore.getMangas(...mangaAttributes);
    if (
      new RegExp('^[0-9,$]*$').test(this?.isMangaSelected ?? '') &&
      this?.isMangaSelected
    ) {
      this.openMangaDetails(Number(this.isMangaSelected));
    }
  }

  openMangaDetails(id: number) {
    this._MangaStore.selectMangaById({
      attributes: [],
      mangaId: Number(id),
    });
    this._bottomSheet.open(MangaDetailsComponent);
  }
}
