import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app/app-routing';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent,{
  providers:[importProvidersFrom(RouterModule.forRoot(routes))]
})
  .catch((err) => console.error(err));