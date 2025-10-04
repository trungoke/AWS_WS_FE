'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GymCard } from '@/components/gyms/GymCard';
import { GymFilters } from '@/components/gyms/GymFilters';
import { useSearchStore } from '@/store/searchStore';
import { Gym } from '@/types';
import { api } from '@/lib/api';

export default function GymsPage() {
  const searchParams = useSearchParams();
  const { searchResults, isLoading, searchGyms } = useSearchStore();
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const loadGyms = async () => {
      try {
        const response = await api.gyms.getAll();
        if (response.success && response.data) {
          setGyms(response.data);
        }
      } catch (error) {
        console.error('Failed to load gyms:', error);
      }
    };

    loadGyms();
  }, []);

  useEffect(() => {
    const query = searchParams.get('q');
    const location = searchParams.get('location');
    
    if (query || location) {
      const filters = {
        searchQuery: query || undefined,
        city: location || undefined,
      };
      searchGyms(filters);
    }
  }, [searchParams, searchGyms]);

  const handleSearch = async (filters: any) => {
    await searchGyms(filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Perfect Gym
          </h1>
          <p className="text-lg text-gray-600">
            Discover gyms in your area with the facilities and services you need
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {gyms.length} gyms found
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-outline btn-md"
            >
              {showFilters ? 'Hide' : 'Show'} Filters
            </button>
          </div>

          {showFilters && (
            <GymFilters onSearch={handleSearch} />
          )}
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gym List */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {(searchResults.gyms.content.length > 0 ? searchResults.gyms.content : gyms).map((gym) => (
                  <GymCard key={gym.id} gym={gym} />
                ))}
              </div>
            )}
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Map View
              </h3>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-500">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
