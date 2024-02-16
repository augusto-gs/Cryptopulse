import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'src/app/core/coin.service';
import { CoinStructure } from 'src/app/types';

@Component({
  selector: 'cr-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css'],
})
export class CoinDetailComponent implements OnInit {
  coin: CoinStructure | null = null;

  constructor(
    private coinService: CoinService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    const { coinId } = this.route.snapshot.params as { coinId: string };

    this.coinService.loadCoin(coinId);

    this.coinService.coin$.subscribe((course) => {
      this.coin = course;
    });
  }
}
