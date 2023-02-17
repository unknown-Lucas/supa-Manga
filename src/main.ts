import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading,
} from '@angular/router';
import { routes } from './app/app-routing';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    ),
  ],
}).catch((err) => console.error(err));
