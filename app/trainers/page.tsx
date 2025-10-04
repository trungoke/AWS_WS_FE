'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TrainerCard } from '@/components/trainers/TrainerCard';
import { TrainerFilters } from '@/components/trainers/TrainerFilters';
import { useSearchStore } from '@/store/searchStore';
import { PersonalTrainer } from '@/types';

// Mock data - in real app, this would come from API
const mockTrainers: PersonalTrainer[] = [
  {
    id: '1',
    userId: '1',
    profile: {
      id: '1',
      userId: '1',
      firstName: 'Sarah',
      lastName: 'Johnson',
      phone: '(555) 123-4567',
      avatar: '/api/placeholder/200/200',
      bio: 'Certified personal trainer with 8 years of experience helping clients achieve their fitness goals.',
      location: {
        id: '1',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        latitude: 40.7128,
        longitude: -74.0060,
      },
    },
    bio: 'Passionate about helping clients achieve their fitness goals through personalized training programs. I specialize in weight loss, strength training, and nutrition guidance.',
    specialties: ['Weight Loss', 'Strength Training', 'Nutrition', 'Cardio Training'],
    certifications: ['NASM-CPT', 'Precision Nutrition', 'CPR/AED'],
    experience: 8,
    hourlyRate: 85,
    rating: 4.9,
    reviewCount: 87,
    availability: [
      { id: '1', dayOfWeek: 1, startTime: '06:00', endTime: '20:00', isAvailable: true },
      { id: '2', dayOfWeek: 2, startTime: '06:00', endTime: '20:00', isAvailable: true },
      { id: '3', dayOfWeek: 3, startTime: '06:00', endTime: '20:00', isAvailable: true },
      { id: '4', dayOfWeek: 4, startTime: '06:00', endTime: '20:00', isAvailable: true },
      { id: '5', dayOfWeek: 5, startTime: '06:00', endTime: '20:00', isAvailable: true },
      { id: '6', dayOfWeek: 6, startTime: '08:00', endTime: '16:00', isAvailable: true },
      { id: '7', dayOfWeek: 0, startTime: '09:00', endTime: '15:00', isAvailable: true },
    ],
    attachedGyms: ['1', '2'],
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    userId: '2',
    profile: {
      id: '2',
      userId: '2',
      firstName: 'Mike',
      lastName: 'Chen',
      phone: '(555) 987-6543',
      avatar: '/api/placeholder/200/200',
      bio: 'Former competitive athlete with expertise in sports-specific training and performance optimization.',
      location: {
        id: '2',
        address: '456 Oak Ave',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90210',
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    bio: 'Former competitive athlete with 12 years of experience in strength and conditioning. I specialize in athletic performance, Olympic lifting, and injury prevention.',
    specialties: ['Athletic Performance', 'Olympic Lifting', 'Injury Prevention', 'Sports Training'],
    certifications: ['CSCS', 'USAW Level 1', 'FMS Level 1'],
    experience: 12,
    hourlyRate: 95,
    rating: 4.7,
    reviewCount: 64,
    availability: [
      { id: '8', dayOfWeek: 1, startTime: '05:00', endTime: '19:00', isAvailable: true },
      { id: '9', dayOfWeek: 2, startTime: '05:00', endTime: '19:00', isAvailable: true },
      { id: '10', dayOfWeek: 3, startTime: '05:00', endTime: '19:00', isAvailable: true },
      { id: '11', dayOfWeek: 4, startTime: '05:00', endTime: '19:00', isAvailable: true },
      { id: '12', dayOfWeek: 5, startTime: '05:00', endTime: '19:00', isAvailable: true },
      { id: '13', dayOfWeek: 6, startTime: '07:00', endTime: '15:00', isAvailable: true },
      { id: '14', dayOfWeek: 0, startTime: '08:00', endTime: '14:00', isAvailable: true },
    ],
    attachedGyms: ['2', '3'],
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    userId: '3',
    profile: {
      id: '3',
      userId: '3',
      firstName: 'Emma',
      lastName: 'Rodriguez',
      phone: '(555) 456-7890',
      avatar: '/api/placeholder/200/200',
      bio: 'Holistic approach to fitness focusing on mind-body connection and sustainable wellness practices.',
      location: {
        id: '3',
        address: '789 Pine St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94102',
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    bio: 'Holistic approach to fitness focusing on mind-body connection and sustainable wellness practices. I specialize in yoga, pilates, meditation, and stress management.',
    specialties: ['Yoga', 'Pilates', 'Meditation', 'Stress Management', 'Flexibility'],
    certifications: ['RYT-500', 'PMA-CPT', 'Yin Yoga Certification'],
    experience: 6,
    hourlyRate: 75,
    rating: 4.8,
    reviewCount: 92,
    availability: [
      { id: '15', dayOfWeek: 1, startTime: '07:00', endTime: '19:00', isAvailable: true },
      { id: '16', dayOfWeek: 2, startTime: '07:00', endTime: '19:00', isAvailable: true },
      { id: '17', dayOfWeek: 3, startTime: '07:00', endTime: '19:00', isAvailable: true },
      { id: '18', dayOfWeek: 4, startTime: '07:00', endTime: '19:00', isAvailable: true },
      { id: '19', dayOfWeek: 5, startTime: '07:00', endTime: '19:00', isAvailable: true },
      { id: '20', dayOfWeek: 6, startTime: '08:00', endTime: '16:00', isAvailable: true },
      { id: '21', dayOfWeek: 0, startTime: '09:00', endTime: '15:00', isAvailable: true },
    ],
    attachedGyms: ['3'],
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

export default function TrainersPage() {
  const searchParams = useSearchParams();
  const { searchResults, isLoading, searchTrainers } = useSearchStore();
  const [trainers, setTrainers] = useState<PersonalTrainer[]>(mockTrainers);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // In a real app, this would trigger an API call based on search params
    const query = searchParams.get('q');
    const location = searchParams.get('location');
    
    if (query || location) {
      // Filter mock data based on search params
      let filteredTrainers = mockTrainers;
      
      if (query) {
        filteredTrainers = filteredTrainers.filter(trainer => 
          trainer.profile.firstName.toLowerCase().includes(query.toLowerCase()) ||
          trainer.profile.lastName.toLowerCase().includes(query.toLowerCase()) ||
          trainer.bio.toLowerCase().includes(query.toLowerCase()) ||
          trainer.specialties.some(specialty => 
            specialty.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
      
      if (location) {
        filteredTrainers = filteredTrainers.filter(trainer => 
          trainer.profile.location?.city.toLowerCase().includes(location.toLowerCase()) ||
          trainer.profile.location?.state.toLowerCase().includes(location.toLowerCase())
        );
      }
      
      setTrainers(filteredTrainers);
    }
  }, [searchParams]);

  const handleSearch = async (filters: any) => {
    // In a real app, this would call the API
    await searchTrainers(filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Perfect Personal Trainer
          </h1>
          <p className="text-lg text-gray-600">
            Connect with certified professionals who are passionate about your success
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {trainers.length} trainers found
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-outline btn-md"
            >
              {showFilters ? 'Hide' : 'Show'} Filters
            </button>
          </div>

          {showFilters && (
            <TrainerFilters onSearch={handleSearch} />
          )}
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trainer List */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {trainers.map((trainer) => (
                  <TrainerCard key={trainer.id} trainer={trainer} />
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
