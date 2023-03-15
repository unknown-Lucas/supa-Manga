import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { AuthService } from './core/services/auth.service';
import { MangaService } from './core/services/manga.service';
import { MangaEffects } from './core/state/mangas/mangas.effects';
import { MANGA_REDUCERS } from './core/state/mangas/mangas.state';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/mangas',
    pathMatch: 'full',
  },
  {
    path: 'mangas',
    providers: [
      MangaService,
      provideEffects([MangaEffects]),
      provideState('MangaModule', MANGA_REDUCERS),
    ],
    loadComponent: () =>
      import('./modules/main/main.component').then((mod) => mod.MainComponent),
  },
  {
    path: 'mangas/:mangaId',
    providers: [
      MangaService,
      provideEffects([MangaEffects]),
      provideState('MangaModule', MANGA_REDUCERS),
    ],
    loadComponent: () =>
      import('./modules/main/main.component').then((mod) => mod.MainComponent),
  },
  {
    path: 'singUp',
    providers: [AuthService],
    loadComponent: () =>
      import('./modules/auth/sing-up/sing-up.component').then(
        (mod) => mod.SingUpComponent
      ),
  },
  {
    path: 'login',
    providers: [AuthService],
    loadComponent: () =>
      import('./modules/auth/login/login.component').then(
        (mod) => mod.LoginComponent
      ),
  },
  {
    path: 'reader',
    loadComponent: () =>
      import('./modules/reader/reader.component').then(
        (mod) => mod.ReaderComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./modules/profile/profile.component').then(
        (mod) => mod.ProfileComponent
      ),
  },
];
