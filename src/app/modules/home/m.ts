import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MangaCardComponent } from 'src/app/shared/components/manga/manga-card/manga-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';

export const modules = [CommonModule, MangaCardComponent, MatProgressBarModule];

export const components = [CarouselComponent];
