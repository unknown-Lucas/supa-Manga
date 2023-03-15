import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaDetailsComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { mangaId: number }) {
    console.log(data);
  }
}
