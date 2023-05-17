import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { shareButtonComponent } from '../../shareButton/shareButton.component';

export const modules = [
  CommonModule,
  MatCardModule,
  NgOptimizedImage,
  MatButtonModule,
  shareButtonComponent,
];
