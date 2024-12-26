import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { products } from '../services/productDatabase'; // Assuming products are exported from src/types/index.ts

const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Holiday', 'Graduation'];
const categories = ['Electronics', 'Fashion', 'Home & Living', 'Books', 'Experiences'];
const priceRanges = ['Under $25', '$25-$50', '$50-$100', '$100-$200', '$200+'];

export function FilterPanel({ setFilteredProducts }: { setFilteredProducts: React.Dispatch<React.SetStateAction<any[]>> }) {
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  useEffect(() => {
    // Function to filter products based on selected filters
    const filteredProducts = products.filter(product => {
      // Filter by occasion
      const matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(product.occasion);

      // Filter by category
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);

      // Filter by price range
      const price = product.price;
      const priceConditions: { [key: string]: (price: number) => boolean } = {
        'Under $25': (price) => price < 25,
        '$25-$50': (price) => price >= 25 && price <= 50,
        '$50-$100': (price) => price > 50 && price <= 100,
        '$100-$200': (price) => price > 100 && price <= 200,
        '$200+': (price) => price > 200,
      };
      const matchesPrice = selectedPriceRange ? priceConditions[selectedPriceRange](price) : true;

      return matchesOccasion && matchesCategory && matchesPrice;
    });

    // Update parent component's state with filtered products
    setFilteredProducts(filteredProducts);
  }, [selectedOccasions, selectedCategories, selectedPriceRange, setFilteredProducts]);

  const handleOccasionChange = (occasion: string) => {
    setSelectedOccasions(prev =>
      prev.includes(occasion) ? prev.filter(o => o !== occasion) : [...prev, occasion]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(prev => (prev === range ? null : range));
  };

  const resetFilters = () => {
    setSelectedOccasions([]);
    setSelectedCategories([]);
    setSelectedPriceRange(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">Occasion</h3>
          <div className="space-y-2">
            {occasions.map((occasion) => (
              <label key={occasion} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedOccasions.includes(occasion)}
                  onChange={() => handleOccasionChange(occasion)}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm">{occasion}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Price Range</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range} className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={selectedPriceRange === range}
                  onChange={() => handlePriceRangeChange(range)}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm">{range}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={resetFilters}
          className="text-purple-600 font-medium text-sm hover:underline"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
