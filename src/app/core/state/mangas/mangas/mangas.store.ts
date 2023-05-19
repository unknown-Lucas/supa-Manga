import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectIsMangaLoading,
  selectIsMangaSelectedLoading,
  selectMangaCollection,
  selectMangaSelected,
} from './mangas.selectors';
import { MangaActions } from './mangas.actions';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MangaDetailsComponent } from 'src/app/shared/components/manga/manga-details/manga-details.component';

@Injectable({
  providedIn: 'root',
})
export class MangaStore {
  mangaCollection$;
  isMangaCollectionLoading$;
  mangaSelected$;
  isMangaSelectedLoading$;

  constructor(private _store: Store, private _bottomSheet: MatBottomSheet) {
    this.mangaCollection$ = this._store.select(selectMangaCollection);
    this.isMangaCollectionLoading$ = this._store.select(selectIsMangaLoading);
    this.mangaSelected$ = this._store.select(selectMangaSelected);
    this.isMangaSelectedLoading$ = this._store.select(
      selectIsMangaSelectedLoading
    );
  }

  public getMangas(attributes: string[]) {
    this._store.dispatch(MangaActions.GET_MANGAS({ attributes }));
  }

  public selectMangaByIdAndOpenSheet({
    ...params
  }: {
    mangaId: number;
    attributes: string[];
  }) {
    this._store.dispatch(MangaActions.SELECT_MANGA_BY_ID(params));
    this._bottomSheet.open(MangaDetailsComponent);
  }

  public selectMangaById({
    ...params
  }: {
    mangaId: number;
    attributes: string[];
  }) {
    this._store.dispatch(MangaActions.SELECT_MANGA_BY_ID(params));
  }
}
