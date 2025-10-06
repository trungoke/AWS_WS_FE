'use client';

import React from 'react';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import { GymCard } from '@/components/gyms/GymCard';
import { OfferCard } from '@/components/offers/OfferCard';
import { TrainerCard } from '@/components/trainers/TrainerCard';
import { Gym, Offer, Trainer } from '@/types';

interface SearchResultsProps {
  query: string;
  gyms?: Gym[];
  offers?: Offer[];
  trainers?: Trainer[];
  isLoading?: boolean;
  totalResults?: number;
  showFilters?: boolean;
  onFilterToggle?: () => void;
}

export function SearchResults({
  query,
  gyms = [],
  offers = [],
  trainers = [],
  isLoading = false,
  totalResults = 0,
  showFilters = false,
  onFilterToggle
}: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary-600/30 border-t-primary-600 rounded-full animate-spin" />
            <p className="text-gray-400 font-medium">Searching for the best matches...</p>
          </div>
        </div>
      </div>
    );
  }

  const hasResults = gyms.length > 0 || offers.length > 0 || trainers.length > 0;

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-primary-600" />
            <h2 className="text-2xl font-bold text-white">Search Results</h2>
          </div>
          {query && (
            <div className="glass-card px-4 py-2 rounded-full border border-primary-600/30">
              <span className="text-gray-400">for "</span>
              <span className="text-primary-400 font-bold">{query}</span>
              <span className="text-gray-400">"</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-400">
            <span className="font-bold text-white">{totalResults}</span> results found
          </div>
          {onFilterToggle && (
            <button
              onClick={onFilterToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                showFilters
                  ? 'bg-primary-600 text-white shadow-neon'
                  : 'glass-card border border-dark-700 text-gray-400 hover:border-primary-600/50'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filters</span>
            </button>
          )}
        </div>
      </div>

      {!hasResults ? (
        <div className="text-center py-20">
          <div className="glass-card rounded-3xl p-12 border border-dark-700/50 max-w-md mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Results Found</h3>
            <p className="text-gray-400 mb-6">
              We couldn't find any matches for "{query}". Try adjusting your search criteria or explore our featured content.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Gym Membership', 'Personal Training', 'Group Classes', 'Nutrition Plans'].map((suggestion) => (
                <button
                  key={suggestion}
                  className="px-4 py-2 rounded-full glass-card border border-primary-600/30 text-primary-400 hover:bg-primary-600 hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Gyms Section */}
          {gyms.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Gyms</h3>
                <div className="text-sm text-gray-400">({gyms.length} found)</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gyms.map((gym) => (
                  <GymCard key={gym.id} gym={gym} />
                ))}
              </div>
            </section>
          )}

          {/* Offers Section */}
          {offers.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Offers</h3>
                <div className="text-sm text-gray-400">({offers.length} found)</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} />
                ))}
              </div>
            </section>
          )}

          {/* Trainers Section */}
          {trainers.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Personal Trainers</h3>
                <div className="text-sm text-gray-400">({trainers.length} found)</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainers.map((trainer) => (
                  <TrainerCard key={trainer.id} trainer={trainer} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
