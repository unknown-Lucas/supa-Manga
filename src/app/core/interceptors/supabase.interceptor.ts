import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isTokenValid, resetTokenCache } from '../helpers/auth.helper';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const SupabaseInterceptor: HttpInterceptorFn = (req, next) => {
  const _router = inject(Router);
  /// ? if we are proxying to mangadex dont include headers
  if (req.url.includes('api.allorigins.win')) return next(req);
  let headers = req.headers;
  const token = localStorage.getItem('Auth');
  //? Setting supabase token
  if (token) {
    if (!isTokenValid()) {
      resetTokenCache();
      _router.navigate(['login']);
      window.alert('Your session has expired!');
    }
    headers = req.headers
      .set('apikey', environment.supabaseKey)
      .set('Authorization', 'Bearer ' + token);
  } else {
    headers = req.headers.set('apikey', environment.supabaseKey);
  }

  req = req.clone({
    headers,
  });

  return next(req);
};
