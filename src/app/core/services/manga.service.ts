import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  constructor(private _http: HttpClient) {}

  getAllMangas() {
    return this._http.get(environment.supabaseUrl + '/rest/v1/Mangas?select=*');
  }
}
