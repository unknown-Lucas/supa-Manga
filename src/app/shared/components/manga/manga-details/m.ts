import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { shareButtonComponent } from '../../shareButton/shareButton.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MangaChaptersListComponent } from './components/manga-chapters-list/manga-chapters-list.component';
import { LikeButtonComponent } from './components/likeButton/likeButton.component';

export const modules = [
  CommonModule,
  NgOptimizedImage,
  MatButtonModule,
  shareButtonComponent,
  MatProgressBarModule,
  LikeButtonComponent,
  MangaChaptersListComponent,
];
