export interface BitcoinData {
  bitcoin: {
    usd: number;
    usd_24h_change: number;
  };
}

export interface OrderBook {
  bids: [number, number][];
  asks: [number, number][];
}