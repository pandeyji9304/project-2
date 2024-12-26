export interface Gift {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  occasion: string[];
  tags: string[];
  rating: number;
}

export interface FilterOptions {
  minPrice?: number;
  maxPrice?: number;
  occasion?: string;
  category?: string;
  gender?: string;
  ageGroup?: string;
}

export interface UserPreferences {
  occasion?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  interests?: string[];
  ageGroup?: string;
  gender?: string;
}