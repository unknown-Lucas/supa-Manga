import { Component } from '@angular/core';
import { modules } from '../m';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [...modules],
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent {}
