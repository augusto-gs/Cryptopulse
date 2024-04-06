import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoinStructure } from '../types';
import { coins } from '../data/coins';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  public coins$ = new BehaviorSubject<CoinStructure[]>([]);
  public coin$ = new BehaviorSubject<CoinStructure | null>(null);

  public loadCoins(): void {
    this.coins$.next(coins);
  }

  public loadCoin(coinId: string): void {
    const coin = coins.find((coin) => coin.id === coinId) ?? null;
    this.coin$.next(coin);
  }
}
