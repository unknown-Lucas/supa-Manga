import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private _MangaStore: MangaStore, private _route: ActivatedRoute) {
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
    this._MangaStore.getMangas(mangaAttributes);
    if (
      new RegExp('^[0-9,$]*$').test(this?.isMangaSelected ?? '') &&
      this?.isMangaSelected
    )
      this.openMangaDetails(Number(this.isMangaSelected));
  }

  openMangaDetails(id: number) {
    this._MangaStore.selectMangaById({
      attributes: [],
      mangaId: Number(id),
    });
  }
}
