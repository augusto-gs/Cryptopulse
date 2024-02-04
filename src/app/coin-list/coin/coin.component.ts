import { Component, Input } from '@angular/core';
import { CoinStructure } from 'src/app/types';

@Component({
  selector: 'cr-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
})
export class CoinComponent {
  @Input({ required: true })
  public coin!: CoinStructure;
}
