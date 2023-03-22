import {
  ChangeDetectionStrategy,
  Component,
  Input,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterModel } from 'src/app/core/models/chapters.model';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-manga-chapters-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './manga-chapters-list.component.html',
  styleUrls: ['./manga-chapters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaChaptersListComponent implements AfterViewInit {
  @Input()
  chapters: ChapterModel[] = [];

  ngAfterViewInit(): void {
    console.log(this.chapters);
  }
}
