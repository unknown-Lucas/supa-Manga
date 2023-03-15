import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MangaModel } from '../models/manga.model';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  constructor(private _http: HttpClient) {}

  getAllMangas(): Observable<MangaModel[]> {
    return this._http.get<MangaModel[]>(
      environment.supabaseUrl + '/rest/v1/Mangas?select=*'
    );
  }
}
