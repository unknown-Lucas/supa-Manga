import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { AuthService } from './core/services/auth.service';
import { ChapterService } from './core/services/chapters.service';
import { MangaService } from './core/services/manga.service';
import { ChapterEffects } from './core/state/mangas/chapters/chapters.effects';
import { MangaEffects } from './core/state/mangas/mangas/mangas.effects';
import { MANGA_REDUCERS } from './core/state/mangas/mangas/mangas.state';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    providers: [
      MangaService,
      ChapterService,
      provideEffects([MangaEffects, ChapterEffects]),
      provideState('MangaModule', MANGA_REDUCERS),
    ],
    loadComponent: () =>
      import('./modules/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'home/:mangaId',
    providers: [
      MangaService,
      ChapterService,
      provideEffects([MangaEffects, ChapterEffects]),
      provideState('MangaModule', MANGA_REDUCERS),
    ],
    loadComponent: () =>
      import('./modules/home/home.component').then((mod) => mod.HomeComponent),
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
    path: 'reader/:mangaId/:code',
    providers: [
      MangaService,
      ChapterService,
      provideEffects([MangaEffects, ChapterEffects]),
      provideState('MangaModule', MANGA_REDUCERS),
    ],
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./modules/reader/reader.component').then(
        (mod) => mod.ReaderComponent
      ),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./modules/profile/profile.component').then(
        (mod) => mod.ProfileComponent
      ),
  },
];
