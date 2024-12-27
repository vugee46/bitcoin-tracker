import { OrderBook } from '../types/bitcoin';

export const generateMockOrderBook = (currentPrice: number): OrderBook => ({
  bids: [
    [currentPrice - 100, 0.5],
    [currentPrice - 200, 1.2],
    [currentPrice - 300, 2.1],
    [currentPrice - 400, 1.8],
    [currentPrice - 500, 3.2],
    [currentPrice - 600, 2.4],
    [currentPrice - 700, 1.6],
    [currentPrice - 800, 2.8],
    [currentPrice - 900, 1.9],
    [currentPrice - 1000, 3.5],
  ],
  asks: [
    [currentPrice + 100, 0.4],
    [currentPrice + 200, 1.1],
    [currentPrice + 300, 1.9],
    [currentPrice + 400, 2.2],
    [currentPrice + 500, 2.8],
    [currentPrice + 600, 1.7],
    [currentPrice + 700, 2.3],
    [currentPrice + 800, 1.5],
    [currentPrice + 900, 2.6],
    [currentPrice + 1000, 1.8],
  ],
});