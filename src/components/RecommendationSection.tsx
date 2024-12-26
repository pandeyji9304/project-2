import React, { useState } from 'react';
import { Gift, UserPreferences } from '../types';
import { PreferencesForm } from './PreferencesForm';
import { GiftCard } from './GiftCard';
import { getRecommendations } from '../services/recommendationService';
import { Sparkles } from 'lucide-react';

export function RecommendationSection() {
  const [recommendations, setRecommendations] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePreferencesSubmit = async (preferences: UserPreferences) => {
    setLoading(true);
    try {
      const results = await getRecommendations(preferences);
      setRecommendations(results);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-semibold text-gray-900">
          Advanced Gift Recommendation Engine
        </h2>
      </div>
  
      <PreferencesForm onSubmit={handlePreferencesSubmit} />
  
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Getting personalized recommendations...</p>
        </div>
      )}
  
      {!loading && recommendations.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recommended Gifts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((gift) => (
              <GiftCard key={gift.id} gift={gift} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
  
}