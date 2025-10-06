'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OfferCard } from '@/components/offers/OfferCard';
import { OfferFilters } from '@/components/offers/OfferFilters';
import { useSearchStore } from '@/store/searchStore';
import { Offer } from '@/types';
import { Grid, List, Filter, Tag, Clock, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// Enhanced mock data với thông tin deal hấp dẫn
const mockOffers: Offer[] = [
  {
    id: '1',
    title: 'Black Friday Mega Deal - 70% Off Annual Membership',
    description: 'Limited time: Get 70% off your first year! Includes access to all premium facilities, group classes, personal training sessions, and exclusive member events. This is our biggest deal of the year!',
    offerType: 'GYM_OFFER',
    gymId: '1',
    price: 299,
    currency: 'USD',
    durationDescription: '12 months',
    imageUrls: '/api/placeholder/600/400,/api/placeholder/600/400',
    averageRating: 4.9,
    totalRatings: 156,
    isActive: true,
    isApproved: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Personal Training Package - 8 Sessions',
    description: 'Transform your fitness journey with our expert personal trainers. Package includes 8 one-on-one sessions, nutrition guidance, and custom workout plans.',
    offerType: 'PT_OFFER',
    ptUserId: '1',
    price: 480,
    currency: 'USD',
    durationDescription: '8 sessions',
    imageUrls: '/api/placeholder/600/400',
    averageRating: 4.8,
    totalRatings: 89,
    isActive: true,
    isApproved: true,
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    title: 'Premium Gym Access + Classes',
    description: 'All-inclusive membership with unlimited access to gym equipment, group fitness classes, sauna, and pool facilities.',
    offerType: 'GYM_OFFER',
    gymId: '2',
    price: 89,
    currency: 'USD',
    durationDescription: '1 month',
    imageUrls: '/api/placeholder/600/400',
    averageRating: 4.7,
    totalRatings: 234,
    isActive: true,
    isApproved: true,
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z',
  },
];

export default function OffersPage() {
  const searchParams = useSearchParams();
  const { searchResults, isLoading, searchOffers } = useSearchStore();
  const [offers, setOffers] = useState<Offer[]>(mockOffers);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const query = searchParams.get('q');
    const type = searchParams.get('type');
    
    if (query || type) {
      let filteredOffers = mockOffers;
      
      if (query) {
        filteredOffers = filteredOffers.filter(offer => 
          offer.title.toLowerCase().includes(query.toLowerCase()) ||
          offer.description.toLowerCase().includes(query.toLowerCase())
        );
      }

      if (type) {
        filteredOffers = filteredOffers.filter(offer => 
          offer.offerType === type.toUpperCase()
        );
      }
      
      setOffers(filteredOffers);
    }
  }, [searchParams]);

  const handleSearch = async (filters: any) => {
    await searchOffers(filters);
  };

  const getDiscountPercentage = (offer: Offer) => {
    // Mock discount calculation - in real app this would be based on actual pricing data
    const mockOriginalPrice = offer.price * 1.5; // Simulate original price
    return Math.round(((mockOriginalPrice - offer.price) / mockOriginalPrice) * 100);
  };

  const getSavingsAmount = (offer: Offer) => {
    // Mock savings calculation
    const mockOriginalPrice = offer.price * 1.5;
    return mockOriginalPrice - offer.price;
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Epic Hero Section for Offers */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-[700px] h-[700px] bg-red-600/8 rounded-full blur-[180px] animate-float" />
          <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-[160px] animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary-800/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-red-600/50 mb-8 shadow-glow">
              <Tag className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-sm font-black text-white uppercase tracking-wider">
                Limited <span className="text-red-400">Time</span> Deals
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              EPIC <span className="text-neon">DEALS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Don't miss these <span className="text-red-400 font-bold">explosive savings</span> on premium memberships and elite training packages
            </p>
          </div>

          {/* Featured Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Tag, number: 'UP TO 70%', label: 'Savings', color: 'text-red-500' },
              { icon: Clock, number: '48 HOURS', label: 'Time Left', color: 'text-yellow-500' },
              { icon: TrendingUp, number: '500+', label: 'Happy Customers', color: 'text-green-500' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group perspective-1000 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card rounded-2xl p-6 text-center shadow-3d group-hover:shadow-neon border border-primary-600/20 group-hover:border-primary-600/40 transform-3d transition-all duration-500 hover:scale-105">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-125 transition-transform duration-300`} />
                  <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black text-white">
                <span className="text-gradient">{offers.length}</span> Hot Deals Available
              </h2>
              <div className="glass-card px-4 py-2 rounded-xl border border-red-600/50 shadow-glow">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm text-red-400 font-bold uppercase">Limited Time</span>
                </div>
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
              <OfferFilters onSearch={handleSearch} />
            </div>
          )}

          {/* Offers Grid với Epic 3D Effects */}
          <div className={cn(
            "gap-8 animate-fade-in-up",
            viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col space-y-6"
          )}>
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className="perspective-1000"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <OfferCard
                  offer={offer}
                  discount={getDiscountPercentage(offer)}
                  savings={getSavingsAmount(offer)}
                />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16 animate-fade-in-up">
            <Button className="btn-primary btn-lg px-16 py-4 shadow-neon group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Tag className="w-5 h-5 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 font-black">DISCOVER MORE DEALS</span>

              {/* Epic shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

