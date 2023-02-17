import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/main/main.component').then((mod) => mod.MainComponent),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./modules/auth/auth.component').then((mod) => mod.AuthComponent),
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
      import('./modules/reader/reader.component').then(
        (mod) => mod.ReaderComponent
      ),
  },
];
