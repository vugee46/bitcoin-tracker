import axios from 'axios';
import { BitcoinData } from '../types/bitcoin';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const BACKUP_API = 'https://api.coincap.io/v2/assets/bitcoin';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fetchFromCoinGecko = async (): Promise<BitcoinData['bitcoin']> => {
  const response = await axios.get<BitcoinData>(
    `${COINGECKO_API}/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true`
  );
  return response.data.bitcoin;
};

const fetchFromCoinCap = async (): Promise<BitcoinData['bitcoin']> => {
  const response = await axios.get(BACKUP_API);
  return {
    usd: parseFloat(response.data.data.priceUsd),
    usd_24h_change: parseFloat(response.data.data.changePercent24Hr)
  };
};

export const fetchBitcoinPrice = async (retries = 2): Promise<BitcoinData['bitcoin']> => {
  try {
    return await fetchFromCoinGecko();
  } catch (error) {
    if (retries > 0) {
      await delay(1000); // Wait 1 second before retrying
      return fetchBitcoinPrice(retries - 1);
    }
    
    // If CoinGecko fails, try CoinCap as fallback
    try {
      return await fetchFromCoinCap();
    } catch (fallbackError) {
      throw new Error('All API endpoints failed');
    }
  }
};