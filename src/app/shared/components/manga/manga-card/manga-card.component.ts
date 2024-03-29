import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MangaModel } from 'src/app/core/models/manga.model';
import { modules } from './m';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss'],
  standalone: true,
  imports: [...modules],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaCardComponent {
  @Input()
  manga: MangaModel = {} as MangaModel;
  @Output()
  openMangaDetails = new EventEmitter<number>();

  constructor() {}

  get mangaUrl() {
    return `${environment.myHost}/home/${this.manga._id}`;
  }

  getMangaStateClass(state: string): string {
    const stateDict: { [K: string]: string } = {
      ongoing: 'ongoing-header-image',
      completed: 'completed-header-image',
      cancelled: 'cancelled-header-image',
      hiatus: 'hiatus-header-image',
    };
    return stateDict[state];
  }
}
