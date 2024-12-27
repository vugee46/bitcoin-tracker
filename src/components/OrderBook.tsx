import React from 'react';
import { OrderBook as OrderBookType } from '../types/bitcoin';
import { formatUSD } from '../utils/formatters';

interface OrderBookProps {
  orderBook: OrderBookType;
}

export const OrderBook: React.FC<OrderBookProps> = ({ orderBook }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-green-400 mb-4 glow">Buy Orders</h3>
        <div className="space-y-2 max-h-[500px] overflow-y-auto custom-scrollbar">
          {orderBook.bids.slice(0, 10).map(([price, amount], i) => (
            <div key={i} className="flex justify-between text-sm bg-gray-800/50 p-3 rounded-lg">
              <span className="text-green-400 glow">{formatUSD(price)}</span>
              <span className="text-gray-300">{formatUSD(price * amount)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-red-400 mb-4 glow">Sell Orders</h3>
        <div className="space-y-2 max-h-[500px] overflow-y-auto custom-scrollbar">
          {orderBook.asks.slice(0, 10).map(([price, amount], i) => (
            <div key={i} className="flex justify-between text-sm bg-gray-800/50 p-3 rounded-lg">
              <span className="text-red-400 glow">{formatUSD(price)}</span>
              <span className="text-gray-300">{formatUSD(price * amount)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};