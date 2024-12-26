import React from 'react';
import { TrendingUp } from 'lucide-react';
import { GiftCard } from './GiftCard';
import { products } from '../services/productDatabase';

// Get top rated products for trending section
const trendingGifts = products
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

export function TrendingGifts() {
  return (
    <section className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-semibold text-gray-900">Trending Gifts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingGifts.map((gift) => (
          <div key={gift.id} className="bg-white p-4 rounded-lg shadow-lg">
            <GiftCard gift={gift} />
            
          </div>
        ))}
      </div>
    </section>
  );
}
