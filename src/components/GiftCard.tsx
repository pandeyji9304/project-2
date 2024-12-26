import React from 'react';
import { Gift } from '../types';
import { Heart } from 'lucide-react';

interface GiftCardProps {
  gift: Gift;
}

export function GiftCard({ gift }: GiftCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative aspect-square">
        <img
          src={gift.image}
          alt={gift.name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-900">{gift.name}</h3>
          <span className="text-purple-600 font-semibold">${gift.price}</span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{gift.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {gift.occasion.map((occ) => (
            <span
              key={occ}
              className="px-2 py-1 text-xs bg-purple-50 text-purple-600 rounded-full"
            >
              {occ}
            </span>
          ))}
        </div>

        {/* "Get It" Button */}
        <a
          href={gift.affiliateUrl}  // Link to buy the product
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 text-white py-2 px-4 rounded-full text-center hover:bg-purple-700 transition duration-300"
        >
          Get It
        </a>
      </div>
    </div>
  );
}
