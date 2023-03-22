import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manga-chapters-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manga-chapters-list.component.html',
  styleUrls: ['./manga-chapters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MangaChaptersListComponent {

}
