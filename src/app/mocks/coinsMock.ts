import { CoinStructure } from '../types';

export const mockCoins: CoinStructure[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    currentPrice: 43352,
    priceChange24Hs: 123,
    marketCapChange24Hs: 0.123,
    circulatingSupply: 123,
    marketCapChange24HsPercentage: 43,
  },
  {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    image:
      'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661',
    currentPrice: 0.99974,
    priceChange24Hs: 123,
    marketCapChange24Hs: 0.123,
    circulatingSupply: 123,
    marketCapChange24HsPercentage: 43,
  },

  {
    id: 'binancecoin',
    symbol: 'bnb',
    name: 'BNB',
    image:
      'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970',
    currentPrice: 302.02,
    priceChange24Hs: 123,
    marketCapChange24Hs: 0.123,
    circulatingSupply: 123,
    marketCapChange24HsPercentage: 43,
  },
];
