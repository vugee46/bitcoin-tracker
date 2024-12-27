import React from 'react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="glass-effect rounded-2xl p-4 text-sm text-gray-400 space-y-2">
      <p>
        <span className="text-yellow-400 font-semibold">Not Financial Advice:</span>{' '}
        The information provided on this website is for informational purposes only and should not be considered financial advice. Trading cryptocurrencies involves substantial risk and may not be suitable for all investors. Always conduct your own research and consult with a qualified financial advisor before making any investment decisions.
      </p>
      <p>
        <span className="text-yellow-400 font-semibold">Affiliate Disclosure:</span>{' '}
        This website contains affiliate links. If you click on these links and make a purchase, we may receive a commission at no additional cost to you. This helps support our platform and enables us to continue providing valuable information.
      </p>
    </div>
  );
};