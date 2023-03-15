import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MangaModel } from 'src/app/core/models/manga.model';
import { NgOptimizedImage } from '@angular/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MangaDetailsComponent } from '../manga-details/manga-details.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaCardComponent {
  @Input()
  manga: MangaModel = {} as MangaModel;

  constructor(private _bottomSheet: MatBottomSheet) {}

  getMangaStateClass(state: string): string {
    const stateDict: { [K: string]: string } = {
      ongoing: 'ongoing-header-image',
      completed: 'completed-header-image',
      cancelled: 'cancelled-header-image',
      hiatus: 'hiatus-header-image',
    };
    return stateDict[state];
  }

  read(mangaId: number) {
    this._bottomSheet.open(MangaDetailsComponent, { data: mangaId });
  }
}
