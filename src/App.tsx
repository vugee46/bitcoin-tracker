import React from 'react';
import { Bitcoin } from 'lucide-react';
import { PriceDisplay } from './components/PriceDisplay';
import { OrderBook } from './components/OrderBook';
import { Banner } from './components/Banner';
import { Disclaimer } from './components/Disclaimer';
import { useBitcoinData } from './hooks/useBitcoinData';

function App() {
  const { price, change24h, orderBook, loading, error } = useBitcoinData();

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-400 font-semibold glow">{error}</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-cyan-400 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Bitcoin className="text-cyan-400 mr-3 glow" size={32} />
          <h1 className="text-3xl font-bold text-white glow">Bitcoin Tracker</h1>
        </div>
        
        <div className="space-y-6">
          <PriceDisplay price={price} change24h={change24h} />
          <OrderBook orderBook={orderBook} />
          <Banner />
          <div className="mt-8">
            <Disclaimer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;