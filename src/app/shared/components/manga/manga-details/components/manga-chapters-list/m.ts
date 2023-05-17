import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { shareButtonComponent } from 'src/app/shared/components/shareButton/shareButton.component';
import { MangaChaptersListComponent } from './manga-chapters-list.component';
import { MatExpansionModule } from '@angular/material/expansion';

export const modules = [
  CommonModule,
  NgOptimizedImage,
  MatButtonModule,
  MatIconModule,
  shareButtonComponent,
  MatProgressBarModule,
  MangaChaptersListComponent,
  MatExpansionModule,
];
