import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MangaCardComponent } from 'src/app/shared/components/manga/manga-card/manga-card.component';

export const modules = [CommonModule, MatIconModule, MatButtonModule];

export const components = [MangaCardComponent];
