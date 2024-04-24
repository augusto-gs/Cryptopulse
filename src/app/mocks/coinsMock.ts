import { CoinStructure } from '../types';

export const mockCoins: CoinStructure[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 43352,
    price_change_24h: 123,
    market_cap_change_24h: 0.123,
    circulating_supply: 123,
    market_cap_change_percentage_24h: 43,
  },
  {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    image:
      'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661',
    current_price: 0.99974,
    price_change_24h: 4234,
    market_cap_change_24h: 0.63456,
    circulating_supply: 5343,
    market_cap_change_percentage_24h: 12,
  },

  {
    id: 'binancecoin',
    symbol: 'bnb',
    name: 'BNB',
    image:
      'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970',
    current_price: 302.02,
    price_change_24h: 3123,
    market_cap_change_24h: 0.5234,
    circulating_supply: 5767,
    market_cap_change_percentage_24h: 78,
  },
];
