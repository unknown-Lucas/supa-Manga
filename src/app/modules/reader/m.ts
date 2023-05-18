import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReaderActionsComponent } from './components/readerActions.component';

export const modules = [
  CommonModule,
  NgOptimizedImage,
  MatProgressBarModule,
  MatButtonModule,
  MatIconModule,
  ReaderActionsComponent,
];
