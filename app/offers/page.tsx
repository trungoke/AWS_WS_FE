'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OfferCard } from '@/components/offers/OfferCard';
import { OfferFilters } from '@/components/offers/OfferFilters';
import { useSearchStore } from '@/store/searchStore';
import { Offer } from '@/types';

// Mock data - in real app, this would come from API
const mockOffers: Offer[] = [
  {
    id: '1',
    type: 'GYM_OFFER',
    title: 'New Member Special - 50% Off First Month',
    description: 'Join now and get 50% off your first month membership. Includes access to all facilities and group classes. Perfect for beginners or those looking to try out our gym.',
    price: 45,
    duration: 30,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    location: {
      id: '1',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    createdBy: '1',
    gymId: '1',
    isActive: true,
    isApproved: true,
    moderationFlags: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    type: 'PT_OFFER',
    title: 'Personal Training Package - 10 Sessions',
    description: 'Comprehensive personal training package with nutrition guidance and workout plans. Perfect for achieving your fitness goals with expert guidance.',
    price: 750,
    duration: 60,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    location: {
      id: '2',
      address: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      latitude: 34.0522,
      longitude: -118.2437,
    },
    createdBy: '2',
    ptId: '1',
    isActive: true,
    isApproved: true,
    moderationFlags: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    type: 'GYM_OFFER',
    title: 'Group Fitness Classes - Unlimited Access',
    description: 'Unlimited access to all group fitness classes including yoga, pilates, and meditation. Great for those who love variety in their workouts.',
    price: 99,
    duration: 30,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    location: {
      id: '3',
      address: '789 Pine St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      latitude: 37.7749,
      longitude: -122.4194,
    },
    createdBy: '3',
    gymId: '3',
    isActive: true,
    isApproved: true,
    moderationFlags: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    type: 'PT_OFFER',
    title: 'Yoga & Meditation Sessions',
    description: 'Holistic approach to fitness with yoga and meditation sessions. Perfect for stress relief and improving flexibility.',
    price: 60,
    duration: 60,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    location: {
      id: '3',
      address: '789 Pine St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      latitude: 37.7749,
      longitude: -122.4194,
    },
    createdBy: '3',
    ptId: '3',
    isActive: true,
    isApproved: true,
    moderationFlags: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    type: 'GYM_OFFER',
    title: 'Student Discount - 30% Off Membership',
    description: 'Special discount for students with valid ID. Includes access to all facilities and group classes at a reduced rate.',
    price: 62,
    duration: 30,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    location: {
      id: '2',
      address: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      latitude: 34.0522,
      longitude: -118.2437,
    },
    createdBy: '2',
    gymId: '2',
    isActive: true,
    isApproved: true,
    moderationFlags: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '6',
    type: 'PT_OFFER',
    title: 'Strength Training Intensive',
    description: 'Focused strength training program designed to build muscle and increase power. Includes personalized workout plans and progress tracking.',
    price: 120,
    duration: 45,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    location: {
      id: '1',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    createdBy: '1',
    ptId: '2',
    isActive: true,
    isApproved: true,
    moderationFlags: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

export default function OffersPage() {
  const searchParams = useSearchParams();
  const { searchResults, isLoading, searchOffers } = useSearchStore();
  const [offers, setOffers] = useState<Offer[]>(mockOffers);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    // In a real app, this would trigger an API call based on search params
    const query = searchParams.get('q');
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    
    if (query || location || type) {
      // Filter mock data based on search params
      let filteredOffers = mockOffers;
      
      if (query) {
        filteredOffers = filteredOffers.filter(offer => 
          offer.title.toLowerCase().includes(query.toLowerCase()) ||
          offer.description.toLowerCase().includes(query.toLowerCase())
        );
      }
      
      if (location) {
        filteredOffers = filteredOffers.filter(offer => 
          offer.location.city.toLowerCase().includes(location.toLowerCase()) ||
          offer.location.state.toLowerCase().includes(location.toLowerCase())
        );
      }
      
      if (type) {
        filteredOffers = filteredOffers.filter(offer => 
          offer.type === type.toUpperCase()
        );
      }
      
      setOffers(filteredOffers);
    }
  }, [searchParams]);

  const handleSearch = async (filters: any) => {
    // In a real app, this would call the API
    await searchOffers(filters);
  };

  const filteredOffers = offers.filter(offer => offer.isActive && offer.isApproved);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Special Offers
              </h1>
              <p className="text-lg text-gray-600">
                Discover amazing deals from gyms and personal trainers
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredOffers.length} offers found
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-outline btn-md"
            >
              {showFilters ? 'Hide' : 'Show'} Filters
            </button>
          </div>

          {showFilters && (
            <OfferFilters onSearch={handleSearch} />
          )}
        </div>

        {/* Results */}
        {isLoading ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} viewMode={viewMode} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No offers found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or check back later for new offers.</p>
            <button
              onClick={() => setShowFilters(true)}
              className="btn btn-primary"
            >
              Adjust Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
