import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  isUserLikeLoading,
  selectUserLikedMangas,
} from './mangaLikes.selectors';
import { MangaLike } from '../../models/likes.model';
import { MangaLikesActions } from './mangaLikes.actions';

@Injectable({ providedIn: 'root' })
export class MangaLikesStore {
  collection$;
  loading$;
  constructor(private _store: Store) {
    this.collection$ = this._store.select(selectUserLikedMangas);
    this.loading$ = this._store.select(isUserLikeLoading);
  }

  likeManga({ ...params }: MangaLike) {
    this._store.dispatch(MangaLikesActions.LIKE_A_MANGA(params));
  }

  getUserLikes(userUID: string) {
    this._store.dispatch(MangaLikesActions.GET_LIKED_MANGAS({ userUID }));
  }
}
