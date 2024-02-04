import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoinStructure } from '../types';
import { coins } from '../data/coins';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  public coins$ = new BehaviorSubject<CoinStructure[]>([]);

  public loadCoins(): void {
    this.coins$.next(coins);
  }
}
const number = (number1: number, number2: number) => {
  number1 * number2;
};

number(2, 2);

const cosas = [1, 2];

cosas.forEach((number) => {
  number * 2;
});
