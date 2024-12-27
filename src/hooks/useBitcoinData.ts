import { useState, useEffect, useCallback } from 'react';
import { OrderBook } from '../types/bitcoin';
import { fetchBitcoinPrice } from '../api/bitcoinApi';
import { generateMockOrderBook } from '../utils/orderBookUtils';

export const useBitcoinData = () => {
  const [price, setPrice] = useState<number>(0);
  const [change24h, setChange24h] = useState<number>(0);
  const [orderBook, setOrderBook] = useState<OrderBook>({ bids: [], asks: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updatePrice = useCallback(async () => {
    try {
      const bitcoinData = await fetchBitcoinPrice();
      setPrice(prevPrice => {
        // Only update order book if price changed significantly (>0.1%)
        if (Math.abs(prevPrice - bitcoinData.usd) / prevPrice > 0.001) {
          setOrderBook(generateMockOrderBook(bitcoinData.usd));
        }
        return bitcoinData.usd;
      });
      setChange24h(bitcoinData.usd_24h_change);
      setError(null); // Clear any previous errors
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update price';
      console.error('Price update failed:', errorMessage);
      setError(errorMessage);
    }
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await updatePrice();
        setLoading(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch initial data';
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [updatePrice]);

  useEffect(() => {
    const priceInterval = setInterval(updatePrice, 5000);
    return () => clearInterval(priceInterval);
  }, [updatePrice]);

  return { price, change24h, orderBook, loading, error };
};