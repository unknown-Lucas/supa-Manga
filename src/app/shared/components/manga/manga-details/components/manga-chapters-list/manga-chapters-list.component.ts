import {
  ChangeDetectionStrategy,
  Component,
  Input,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterModel } from 'src/app/core/models/chapters.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-manga-chapters-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatButtonModule, MatIconModule],
  templateUrl: './manga-chapters-list.component.html',
  styleUrls: ['./manga-chapters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaChaptersListComponent implements AfterViewInit {
  @Input()
  chapters?: ChapterModel | null;

  ngAfterViewInit(): void {
    console.log(this.chapters);
  }

  get chapterCodes() {
    const codesArr = this.chapters?.chapterCodes.split(',');
    console.log(codesArr);
    return codesArr;
  }
}
