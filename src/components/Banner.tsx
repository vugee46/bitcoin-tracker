import React from 'react';

export const Banner: React.FC = () => {
  return (
    <a 
      href="https://heikoboos.com/Cryptocurrency-Secrets/#aff=vugee42"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full mt-8 glass-effect rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-yellow-400 glow mb-2">
            WANT TO LEVEL UP? GRAB THIS EBOOK!!!
          </h2>
          <p className="text-gray-300">
            Learn the secrets of cryptocurrency trading and investment
          </p>
        </div>
        <div className="hidden md:block w-24 h-24">
          <img 
            src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=96&h=96&q=80"
            alt="Crypto ebook"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </a>
  );
};