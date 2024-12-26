// src/types/index.ts

export const products: Gift[] = [
  {
    id: '1',
    name: 'Smart Watch Series X',
    description: 'Latest generation smartwatch with health tracking and notifications',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics',
    occasion: ['Birthday', 'Anniversary'],
    tags: ['tech', 'fitness', 'smart'],
    rating: 4.8,
    affiliateUrl: 'https://example.com/smart-watch-series-x'
  },
  {
    id: '2',
    name: 'Handcrafted Leather Wallet',
    description: 'Premium leather wallet with RFID protection',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800',
    category: 'Fashion',
    occasion: ['Birthday', 'Holiday'],
    tags: ['accessories', 'leather', 'premium'],
    rating: 4.7,
    affiliateUrl: 'https://example.com/smart-watch-series-x'
  },
  {
    id: '3',
    name: 'Bluetooth Noise Cancelling Headphones',
    description: 'High-quality noise-canceling headphones with wireless connectivity',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1568030157-54453ab576fc?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics',
    occasion: ['Birthday', 'Holiday'],
    tags: ['audio', 'wireless', 'noise-cancelling'],
    rating: 4.6,
    affiliateUrl: 'https://example.com/smart-watch-series-x'
  },
  {
    id: '4',
    name: 'Classic Leather Jacket',
    description: 'Stylish and durable leather jacket for all seasons',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1562128000-b5f2ab6a8267?auto=format&fit=crop&q=80&w=800',
    category: 'Fashion',
    occasion: ['Anniversary', 'Holiday'],
    tags: ['fashion', 'leather', 'premium'],
    rating: 4.5,
    affiliateUrl: 'https://example.com/smart-watch-series-x'
  },
  {
    id: '5',
    name: 'Sleek 4K Smart TV',
    description: 'Ultra HD smart TV with voice control and streaming capabilities',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1583651944770-79506a015a85?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics',
    occasion: ['Holiday', 'Anniversary'],
    tags: ['electronics', 'home', 'entertainment'],
    rating: 4.9,
    affiliateUrl: 'https://example.com/smart-watch-series-x'
  },
  {
    id: '6',
    name: 'Eco-Friendly Reusable Water Bottle',
    description: 'Sustainable water bottle with leak-proof design',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1570857397085-f2f3b5e1fa2f?auto=format&fit=crop&q=80&w=800',
    category: 'Home & Living',
    occasion: ['Birthday', 'Holiday'],
    tags: ['eco-friendly', 'fitness', 'sustainability'],
    rating: 4.6,
    affiliateUrl: 'https://example.com/smart-watch-series-x'
  },
  {
    id: '7',
    name: 'Portable Bluetooth Speaker',
    description: 'Compact and powerful Bluetooth speaker for any occasion',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1600180657779-e80f04272bbd?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics',
    occasion: ['Holiday', 'Birthday'],
    tags: ['audio', 'wireless', 'portable'],
    rating: 4.7,
    affiliateUrl: 'https://example.com/smart-watch-series-x'
  },
];

export type Gift = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  occasion: string[];
  tags: string[];
  rating: number;
  affiliateUrl: string;
};
