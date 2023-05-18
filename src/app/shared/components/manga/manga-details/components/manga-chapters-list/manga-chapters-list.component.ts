import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChapterModel } from 'src/app/core/models/chapters.model';
import { Router } from '@angular/router';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MangaDetailsComponent } from '../../manga-details.component';
import { modules } from './m';

@Component({
  selector: 'app-manga-chapters-list',
  standalone: true,
  imports: [...modules],
  templateUrl: './manga-chapters-list.component.html',
  styleUrls: ['./manga-chapters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaChaptersListComponent {
  @Input()
  chapters?: ChapterModel | null;
  @Input()
  mangaId?: number;

  constructor(
    private _router: Router,
    private _matBottomSheetRef: MatBottomSheetRef<MangaDetailsComponent>
  ) {}

  get chapterCodes() {
    const codesArr = this.chapters?.chapterCodes;
    return codesArr;
  }

  readChapter(chapter: string) {
    this._matBottomSheetRef.dismiss();
    this._router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this._router.navigate([`/reader/${this.mangaId}/${chapter}`])
      );
  }
}
