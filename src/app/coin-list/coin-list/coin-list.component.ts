import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/core/coin.service';
import { CoinStructure } from 'src/app/types';

@Component({
  selector: 'cr-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css'],
})
export class CoinListComponent implements OnInit {
  public coins: CoinStructure[] = [];

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.loadCoins().subscribe((coins) => {
      this.coins = coins;
    });
  }
}
