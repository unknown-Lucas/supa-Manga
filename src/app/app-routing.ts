import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/main/main.component').then((mod) => mod.MainComponent),
  },
  {
    path: 'singUp',
    loadComponent: () =>
      import('./modules/auth/sing-up/sing-up.component').then(
        (mod) => mod.SingUpComponent
      ),
  },
  {
    path: 'login',
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
