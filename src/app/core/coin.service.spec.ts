import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CoinService } from './coin.service';
import { CoinStructure } from '../types';
import { mockCoins } from '../mocks/coinsMock';

describe('Given a CoinService', () => {
  let service: CoinService;
  let testController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CoinService);
    testController = TestBed.inject(HttpTestingController);
  });

  describe('When it calls its loadCharacters method', () => {
    it('Then it should change the coins$ variable', () => {
      service.loadCoins().subscribe((coins: CoinStructure[]) => {
        expect(coins).toBeTruthy();
        expect(coins).toEqual(mockCoins);
      });

      const mockReq = testController.expectOne(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false/',
      );
      mockReq.flush(Object.values(mockCoins));
      expect(service.coins.getValue()).toEqual(mockCoins);
    });
  });
});
