import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

export const modules = [
  MatSidenavModule,
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  RouterModule,
  MatListModule,
  MatButtonModule,
];
