'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GymCard } from '@/components/gyms/GymCard';
import { GymFilters } from '@/components/gyms/GymFilters';
import { useSearchStore } from '@/store/searchStore';
import { Gym } from '@/types';
import { Grid, List, Filter, MapPin, Search, Building2, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// Mock data với thông tin chi tiết hơn
const mockGyms: Gym[] = [
  {
    id: '1',
    name: 'Elite Fitness Center',
    description: 'State-of-the-art fitness facility with premium equipment, expert trainers, and world-class amenities. Perfect for serious athletes and fitness enthusiasts.',
    address: '123 Fitness Street, Downtown NYC',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    postalCode: '10001',
    phoneNumber: '+1 (555) 123-4567',
    email: 'info@elitefitness.com',
    website: 'https://elitefitness.com',
    latitude: 40.7128,
    longitude: -74.0060,
    averageRating: 4.8,
    totalRatings: 124,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'PowerHouse Athletics',
    description: 'Hardcore training facility for powerlifters and strongman athletes. Raw power meets cutting-edge technology.',
    address: '456 Strength Ave, Midtown LA',
    city: 'Los Angeles',
    state: 'CA',
    country: 'USA',
    postalCode: '90210',
    phoneNumber: '+1 (555) 987-6543',
    email: 'contact@powerhouse.com',
    website: 'https://powerhouse.com',
    latitude: 34.0522,
    longitude: -118.2437,
    averageRating: 4.9,
    totalRatings: 189,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Zen Wellness Studio',
    description: 'Holistic approach to fitness with yoga, pilates, meditation, and wellness programs in a serene environment.',
    address: '789 Wellness Blvd, Westside SF',
    city: 'San Francisco',
    state: 'CA',
    country: 'USA',
    postalCode: '94102',
    phoneNumber: '+1 (555) 456-7890',
    email: 'hello@zenwellness.com',
    website: 'https://zenwellness.com',
    latitude: 37.7749,
    longitude: -122.4194,
    averageRating: 4.7,
    totalRatings: 156,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

export default function GymsPage() {
  const searchParams = useSearchParams();
  const { searchResults, isLoading, searchGyms } = useSearchStore();
  const [gyms, setGyms] = useState<Gym[]>(mockGyms);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const query = searchParams.get('q');
    const location = searchParams.get('location');
    
    if (query || location) {
      let filteredGyms = mockGyms;

      if (query) {
        filteredGyms = filteredGyms.filter(gym =>
          gym.name.toLowerCase().includes(query.toLowerCase()) ||
          gym.description.toLowerCase().includes(query.toLowerCase())
        );
      }

      if (location) {
        filteredGyms = filteredGyms.filter(gym =>
          gym.city.toLowerCase().includes(location.toLowerCase()) ||
          gym.state.toLowerCase().includes(location.toLowerCase())
        );
      }

      setGyms(filteredGyms);
    }
  }, [searchParams]);

  const handleSearch = async (filters: any) => {
    await searchGyms(filters);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Epic Hero Section for Gyms */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Background với mesh gradient */}
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] animate-float" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-primary-700/10 rounded-full blur-[140px] animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary-600/30 mb-8">
              <Building2 className="w-5 h-5 text-primary-500 animate-pulse" />
              <span className="text-sm font-black text-white uppercase tracking-wider">
                Premium <span className="text-gradient">Facilities</span>
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              ELITE <span className="text-neon">GYMS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover <span className="text-primary-400 font-bold">world-class fitness facilities</span> with state-of-the-art equipment and premium amenities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Controls Bar với 3D Effects */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black text-white">
                Found <span className="text-gradient">{gyms.length}</span> Gyms
              </h2>
              <div className="glass-card px-4 py-2 rounded-xl border border-primary-600/30">
                <span className="text-sm text-primary-400 font-bold">
                  {isLoading ? 'Searching...' : 'Ready'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex rounded-xl glass-card border border-dark-700/50 p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-lg"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-lg"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mb-12 animate-fade-in-up">
              <GymFilters onSearch={handleSearch} />
            </div>
          )}

          {/* Gyms Grid với 3D Effects */}
          <div className={cn(
            "gap-8 animate-fade-in-up",
            viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col space-y-6"
          )}>
            {gyms.map((gym, index) => (
              <div
                key={gym.id}
                className="perspective-1000"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GymCard gym={gym} viewMode={viewMode} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16 animate-fade-in-up">
            <Button className="btn-primary btn-lg px-16 py-4 shadow-neon group">
              <Search className="w-5 h-5 mr-3 group-hover:rotate-90 transition-transform duration-300" />
              <span className="font-black">LOAD MORE GYMS</span>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
