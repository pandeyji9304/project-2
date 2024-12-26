import { Gift, UserPreferences } from '../types';
import { products } from './productDatabase';

export async function getRecommendations(preferences: UserPreferences): Promise<Gift[]> {
  // Filter products based on basic criteria
  let filteredProducts = products.filter(product => 
    (!preferences.minPrice || product.price >= preferences.minPrice) &&
    (!preferences.maxPrice || product.price <= preferences.maxPrice) &&
    (!preferences.occasion || product.occasion.includes(preferences.occasion)) &&
    (!preferences.category || product.category === preferences.category)
  );

  // Apply AI-based scoring
  const scoredProducts = filteredProducts.map(product => ({
    product,
    score: calculateRecommendationScore(product, preferences)
  }));

  // Sort by score and return top recommendations
  return scoredProducts
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
}

function calculateRecommendationScore(product: Gift, preferences: UserPreferences): number {
  let score = 0;

  // Base score from rating
  score += product.rating * 10;

  // Score based on interests match
  if (preferences.interests && preferences.interests.length > 0) {
    const interestMatchCount = preferences.interests.filter(interest =>
      product.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase()))
    ).length;
    score += interestMatchCount * 5;
  }

  // Age group appropriate scoring
  if (preferences.ageGroup) {
    const ageGroupScore = getAgeGroupScore(product, preferences.ageGroup);
    score += ageGroupScore;
  }

  // Gender preference scoring
  if (preferences.gender) {
    const genderScore = getGenderScore(product, preferences.gender);
    score += genderScore;
  }

  return score;
}

function getAgeGroupScore(product: Gift, ageGroup: string): number {
  // Age group scoring logic
  const ageGroupMappings: { [key: string]: string[] } = {
    'Teen': ['tech', 'gadget', 'gaming', 'fashion'],
    'Young Adult': ['tech', 'fashion', 'lifestyle', 'home'],
    'Adult': ['home', 'kitchen', 'premium', 'professional'],
    'Senior': ['comfort', 'classic', 'practical', 'traditional']
  };

  const relevantTags = ageGroupMappings[ageGroup] || [];
  const matchingTags = product.tags.filter(tag => 
    relevantTags.some(relevantTag => tag.toLowerCase().includes(relevantTag.toLowerCase()))
  );

  return matchingTags.length * 3;
}

function getGenderScore(product: Gift, gender: string): number {
  // Gender preference scoring logic
  const genderMappings: { [key: string]: string[] } = {
    'Male': ['tech', 'gadget', 'leather', 'classic'],
    'Female': ['jewelry', 'fashion', 'beauty', 'accessories'],
    'Other': ['neutral', 'modern', 'practical', 'creative']
  };

  const relevantTags = genderMappings[gender] || [];
  const matchingTags = product.tags.filter(tag => 
    relevantTags.some(relevantTag => tag.toLowerCase().includes(relevantTag.toLowerCase()))
  );

  return matchingTags.length * 3;
}