import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaService } from 'src/app/core/services/manga.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private _mangaService: MangaService) {}

  ngOnInit(): void {
    this._mangaService.getAllMangas().subscribe((res) => console.log(res));
  }
}
