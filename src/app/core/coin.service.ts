import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoinStructure } from '../types';
import { coins } from '../data/coins';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  public coins$ = new BehaviorSubject<CoinStructure[]>([]);

  public loadCharacters(): void {
    this.coins$.next(coins);
  }
}
