import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { userForm } from 'src/app/core/models/auth.model';
import {
  selectIsMangaLoading,
  selectIsMangaSelectedLoading,
  selectMangaCollection,
  selectMangaSelected,
} from './mangas.selectors';
import { MangaActions } from './mangas.actions';

@Injectable({
  providedIn: 'root',
})
export class MangaStore {
  mangaCollection$;
  isMangaCollectionLoading$;
  mangaSelected$;
  isMangaSelectedLoading$;

  constructor(private _store: Store) {
    this.mangaCollection$ = this._store.select(selectMangaCollection);
    this.isMangaCollectionLoading$ = this._store.select(selectIsMangaLoading);
    this.mangaSelected$ = this._store.select(selectMangaSelected);
    this.isMangaSelectedLoading$ = this._store.select(
      selectIsMangaSelectedLoading
    );
  }

  public getMangas(...params: string[]) {
    return this._store.dispatch(
      MangaActions.GET_MANGAS({ attributes: params })
    );
  }

  public selectMangaById({
    ...params
  }: {
    mangaId: number;
    attributes: string[];
  }) {
    return this._store.dispatch(MangaActions.SELECT_MANGA_BY_ID(params));
  }
}
