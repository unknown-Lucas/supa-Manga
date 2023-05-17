import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { shareButtonComponent } from 'src/app/shared/components/shareButton/shareButton.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

export const modules = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  shareButtonComponent,
  MatExpansionModule,
];
