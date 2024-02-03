import { TestBed } from '@angular/core/testing';

import { CoinService } from './coin.service';
import { coins } from '../data/coins';

describe('Given a CoinService', () => {
  let service: CoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CoinService] });
    service = TestBed.inject(CoinService);
  });

  describe('When it calls its loadCharacters method', () => {
    it('Then it should change the coins$ variable', () => {
      service.loadCharacters();
      expect(service.coins$.getValue()).toBe(coins);
    });
  });
});
