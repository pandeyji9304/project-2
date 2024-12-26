import React, { useState } from 'react';
import { UserPreferences } from '../types';
import { Sparkles } from 'lucide-react';

interface PreferencesFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

export function PreferencesForm({ onSubmit }: PreferencesFormProps) {
  const [preferences, setPreferences] = useState<UserPreferences>({
    occasion: '',
    minPrice: undefined,
    maxPrice: undefined,
    category: '',
    interests: [],
    ageGroup: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Occasion</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={preferences.occasion}
            onChange={(e) => setPreferences({ ...preferences, occasion: e.target.value })}
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Wedding">Wedding</option>
            <option value="Holiday">Holiday</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={preferences.category}
            onChange={(e) => setPreferences({ ...preferences, category: e.target.value })}
          >
            <option value="">Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home & Living">Home & Living</option>
            <option value="Personalized">Personalized</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Min"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              onChange={(e) => setPreferences({ ...preferences, minPrice: Number(e.target.value) })}
            />
            <input
              type="number"
              placeholder="Max"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              onChange={(e) => setPreferences({ ...preferences, maxPrice: Number(e.target.value) })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age Group</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={preferences.ageGroup}
            onChange={(e) => setPreferences({ ...preferences, ageGroup: e.target.value })}
          >
            <option value="">Select age group</option>
            <option value="Teen">Teen</option>
            <option value="Young Adult">Young Adult</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <Sparkles className="w-5 h-5" />
        Get Recommendations
      </button>
    </form>
  );
}