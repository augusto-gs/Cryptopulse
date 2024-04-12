export interface CoinStructure {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  priceChange24Hs: number;
  marketCapChange24Hs: number;
  marketCapChange24HsPercentage: number;
  circulatingSupply: number;
}
