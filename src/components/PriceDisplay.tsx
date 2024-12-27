import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatUSD } from '../utils/formatters';

interface PriceDisplayProps {
  price: number;
  change24h: number;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, change24h }) => {
  const isPositive = change24h >= 0;
  
  return (
    <div className="glass-effect rounded-2xl p-8 neon-border">
      <h2 className="text-xl font-semibold text-gray-300 mb-4">Current Price</h2>
      <div className="flex items-center space-x-4">
        <span className="text-5xl font-bold text-white glow transition-all duration-300">
          {formatUSD(price)}
        </span>
        <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'} glow`}>
          {isPositive ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
          <span className="ml-1 font-semibold">
            {change24h.toFixed(2)}%
          </span>
        </div>
      </div>
      <div className="text-xs text-cyan-400 mt-4 glow">
        Live updates every 5 seconds
      </div>
    </div>
  );
};