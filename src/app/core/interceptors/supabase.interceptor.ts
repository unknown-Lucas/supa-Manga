import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isTokenValid, resetTokenCache } from '../helpers/auth.helper';

export const SupabaseInterceptor: HttpInterceptorFn = (req, next) => {
  let headers = req.headers;
  const token = localStorage.getItem('Auth');
  //? Setting supabase token
  if (req.url.includes('api.allorigins.win')) return next(req);

  if (token) {
    if (!isTokenValid()) {
      resetTokenCache();
      window.location.replace('/login');
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
