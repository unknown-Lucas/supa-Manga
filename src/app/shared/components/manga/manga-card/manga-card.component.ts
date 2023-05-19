import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MangaModel } from 'src/app/core/models/manga.model';
import { modules } from './m';

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
    const location = window.location.href;
    const locArr = location.split('/');
    if (locArr.at(-1) === 'home') return `${location}/${this.manga._id}`;
    else {
      locArr.pop();
      return `${locArr.join('/')}/${this.manga._id}`;
    }
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
