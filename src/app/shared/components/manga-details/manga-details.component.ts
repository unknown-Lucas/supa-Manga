import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { BehaviorSubject, filter, ReplaySubject, take, takeUntil } from 'rxjs';
import {
  selectIsMangaSelectedLoading,
  selectMangaSelected,
} from 'src/app/core/state/mangas/mangas.selector';
import { NotificationActions } from 'src/app/core/state/notifications/notifications.actions';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./manga-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaDetailsComponent implements AfterViewInit, OnDestroy {
  manga$;
  loading$;
  destroy$ = new ReplaySubject<Boolean>();
  constructor(
    private _store: Store,
    private _matBottomSheetRef: MatBottomSheetRef<MangaDetailsComponent>
  ) {
    this.manga$ = this._store.select(selectMangaSelected);
    this.loading$ = this._store.select(selectIsMangaSelectedLoading);
  }

  ngAfterViewInit(): void {
    this.loading$
      .pipe(takeUntil(this.destroy$))
      .pipe(filter((bool) => !bool))
      .subscribe(() => {
        console.log('loading Observable');
        this.manga$.pipe(take(1)).subscribe((manga) => {
          if (!manga) {
            this._matBottomSheetRef.dismiss();
            this._store.dispatch(
              NotificationActions.SHOW_WARNING_MESSAGE({
                message: 'There is no such manga',
              })
            );
          }
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
