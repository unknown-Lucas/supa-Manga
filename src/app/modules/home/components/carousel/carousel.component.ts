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
  title: string = '';
  private currentSlideIndex = 0;
  @Input()
  elementsCount: number = 0;

  autoSlide = true;
  isWaiting = false;

  ngAfterViewInit(): void {
    setInterval(() => {
      if (this.autoSlide) this.nextSlide();
    }, 4000);
  }

  stopAutoCarousel() {
    this.autoSlide = false;
    if (!this.isWaiting) {
      this.isWaiting = true;
      setTimeout(() => {
        this.autoSlide = true;
        this.isWaiting = false;
      }, 20000);
    }
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
      (this.currentSlideIndex - 2 + this.elementsCount) % this.elementsCount;
    this.slideToCurrent();
  }

  private nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 2) % this.elementsCount;
    this.slideToCurrent();
  }

  slideToCurrent() {
    const cardWidth =
      this.carouselWrapper.nativeElement.children[0].offsetWidth;
    const offset = this.currentSlideIndex * (cardWidth + 20); //? Add any additional margin or padding if present
    this.carouselWrapper.nativeElement.style.transform = `translateX(-${offset}px)`;
  }
}
