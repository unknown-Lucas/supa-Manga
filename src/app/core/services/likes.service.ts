import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MangaModel } from '../models/manga.model';
import { MangaLike } from '../models/likes.model';

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  constructor(private _http: HttpClient) {}

  getUserMangaLikes(userId: string) {
    return this._http.get<MangaLike[]>(
      `${environment.supabaseUrl}/rest/v1/Likes?userUID=eq.${userId}&select=mangaId`
    );
  }

  postMangaLike({ userId, mangaId }: { userId: string; mangaId: number }) {
    return this._http.post<MangaLike>(
      `${environment.supabaseUrl}/rest/v1/Likes`,
      {
        userUID: userId,
        mangaId,
      }
    );
  }

  mangaUnlike({ userId, mangaId }: { userId: string; mangaId: number }) {
    return this._http.delete<any>(
      `${environment.supabaseUrl}/rest/v1/Likes?userUID=eq.${userId}&mangaId=eq.${mangaId}`
    );
  }
}
