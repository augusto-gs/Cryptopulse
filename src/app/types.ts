export interface CoinStructure {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  priceChange24Hs: number;
  marketCapChange24Hs: number;
  marketCapChange24HsPercentage: number;
  circulatingSupply: number;
}
