import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const supabaseInterceptor: HttpInterceptorFn = (req, next) => {
  let headers = req.headers;
  const token = localStorage.getItem('Auth');
  //? Setting supabase token
  if (token) {
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
