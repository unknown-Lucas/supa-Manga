import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withDebugTracing } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { supabaseInterceptor } from './app/core/interceptors/supabase.interceptor';
import { AuthEffects } from './app/core/state/auth/auth.efffects';
import { AUTH_REDUCERS } from './app/core/state/auth/auth.state';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationEffects } from './app/core/state/notifications/notifications.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideStoreDevtools(),
    provideEffects([AuthEffects, NotificationEffects]),
    provideState('AuthModule', AUTH_REDUCERS), //? Its here and not lazy loaded because we load all the templates at the start of the app
    importProvidersFrom(BrowserAnimationsModule, MatSnackBarModule),
    provideHttpClient(withInterceptors([supabaseInterceptor])),
    provideRouter(routes, withDebugTracing()),
  ],
}).catch((err) => console.error(err));
