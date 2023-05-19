import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChapterModel } from '../models/chapters.model';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  constructor(private _http: HttpClient) {}

  getChapters(attributes: string[]): Observable<ChapterModel[]> {
    let attributesParsed = '*';
    if (attributes.length) attributesParsed = attributes.join(',');
    return this._http.get<ChapterModel[]>(
      `${environment.supabaseUrl}/rest/v1/Chapters?select=${attributesParsed}`
    );
  }

  getChapterByMangaId(
    id: number,
    attributes: string[]
  ): Observable<ChapterModel[]> {
    let attributesParsed = '*';
    if (attributes.length) attributesParsed = attributes.join(',');
    return this._http.get<ChapterModel[]>(
      `${environment.supabaseUrl}/rest/v1/Chapters?manga_id=eq.${id}&select=${attributesParsed}`
    );
  }

  getChapterImages(chapterCode: string) {
    return this._http.get<any>(
      `https://api.allorigins.win/get?url=https://api.mangadex.org/at-home/server/${chapterCode}`,
      {}
    );
  }
}
