import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CoinStructure } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  public coins = new BehaviorSubject<CoinStructure[]>([]);
  public coins$ = this.coins.asObservable();
  public coin = new BehaviorSubject<CoinStructure | null>(null);
  public coin$ = this.coin.asObservable();
  private urlApi =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false/';

  constructor(private http: HttpClient) {}

  public loadCoins(): Observable<CoinStructure[]> {
    return this.http.get<CoinStructure[]>(this.urlApi).pipe(
      tap((coins) => {
        this.coins.next(coins);
      }),
    );
  }

  public loadCoin(coinId: string): Observable<CoinStructure> {
    return this.http.get<CoinStructure>(this.urlApi).pipe(
      tap(() => {
        this.coin.next(
          this.coins.value.find((coin) => coin.id === coinId) ?? null,
        );
      }),
    );
  }
}
