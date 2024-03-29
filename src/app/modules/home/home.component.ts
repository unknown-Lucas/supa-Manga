import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { components, modules } from './m';
import { MangaStore } from 'src/app/core/state/mangas/mangas/mangas.store';

@Component({
  standalone: true,
  imports: [...modules, ...components],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
//TODO: paginate home manga collection
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
      this.onOpenMangaDetails(Number(this.isMangaSelected));
  }

  onOpenMangaDetails(id: number) {
    this._MangaStore.selectMangaByIdAndOpenSheet({
      attributes: [],
      mangaId: id,
    });
  }
}
