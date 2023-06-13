import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MangaModel } from 'src/app/core/models/manga.model';
import { components, modules } from './m';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [...modules, ...components],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carouselWrapper', { static: true }) carouselWrapper!: ElementRef;

  @Input()
  collection: MangaModel[] = [];
  @Input()
  title: string = '';
  @Output()
  openMangaDetails = new EventEmitter();
  private currentSlideIndex = 0;

  autoSlide = true;
  isWaiting = false;

  ngAfterViewInit(): void {
    setInterval(() => {
      if (this.autoSlide) this.nextSlide();
    }, 4000);
  }

  stopAutoCarousel() {
    this.autoSlide = false;
    if (!this.isWaiting)
      setTimeout(() => {
        this.autoSlide = true;
        this.isWaiting = !this.isWaiting;
      }, 20000);
  }

  prevSlideButton() {
    this.stopAutoCarousel();
    this.prevSlide();
  }

  nextSlideButton() {
    this.stopAutoCarousel();
    this.nextSlide();
  }

  private prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.collection.length) %
      this.collection.length;
    this.slideToCurrent();
  }

  private nextSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.collection.length;
    this.slideToCurrent();
  }

  slideToCurrent() {
    const cardWidth =
      this.carouselWrapper.nativeElement.children[0].offsetWidth;
    const offset = this.currentSlideIndex * (cardWidth + 20) * 2; //? Add any additional margin or padding if present
    this.carouselWrapper.nativeElement.style.transform = `translateX(-${offset}px)`;
  }
}
