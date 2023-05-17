import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MangaModel } from '../models/manga.model';

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  constructor(private _http: HttpClient) {}

  postLike({ userId, mangaId }: { userId: string; mangaId: number }) {
    return this._http.post<MangaModel[]>(
      `${environment.supabaseUrl}/rest/v1/Likes`,
      {
        userUID: userId,
        mangaId,
      }
    );
  }
}
