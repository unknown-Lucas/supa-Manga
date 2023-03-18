import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { userModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  getUser() {
    return this._http.get<userModel>(environment.supabaseUrl + '/auth/v1/user');
  }

  singUp(values: { email: string; password: string }) {
    return this._http.post(environment.supabaseUrl + '/auth/v1/signup', values);
  }

  logIn(values: { email: string; password: string }) {
    return this._http.post<userModel>(
      environment.supabaseUrl + '/auth/v1/token?grant_type=password',
      values
    );
  }

  logOut() {
    return this._http.post(
      environment.supabaseUrl + '/auth/v1/logout',
      undefined
    );
  }

  recoverPassword(email: string) {
    return this._http.post(
      environment.supabaseUrl + '/auth/v1/recover',
      undefined
    );
  }

  updateUser(newUser: { email: string; password: string }) {
    return this._http.put(environment.supabaseUrl + '/auth/v1/user', newUser);
  }
}
