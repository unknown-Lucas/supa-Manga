import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const supabaseInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('supaBaseInterceptor');

  //? Setting supabase token
  const headers = req.headers.set('apikey', environment.supabaseKey);

  req = req.clone({
    headers,
  });

  return next(req);
};
