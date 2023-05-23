import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule, withDebugTracing } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { SupabaseInterceptor } from './app/core/interceptors/supabase.interceptor';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationEffects } from './app/core/state/notifications/notifications.effects';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AUTH_REDUCERS } from './app/core/state/auth/auth.state';
import { AuthEffects } from './app/core/state/auth/auth.effects';
import { LIKES_REDUCERS } from './app/core/state/mangaLikes/mangaLikes.state';
import { mangaLikesEffects } from './app/core/state/mangaLikes/mangaLikes.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideStoreDevtools(),
    provideEffects([AuthEffects, NotificationEffects, mangaLikesEffects]),
    provideState('AuthModule', AUTH_REDUCERS),
    provideState('LikesModule', LIKES_REDUCERS),
    importProvidersFrom(
      BrowserAnimationsModule,
      MatSnackBarModule,
      MatBottomSheetModule,
      RouterModule
    ),
    provideHttpClient(withInterceptors([SupabaseInterceptor])),
    provideRouter(routes, withDebugTracing()),
  ],
}).catch((err) => console.error(err));
