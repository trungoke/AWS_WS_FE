'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { 
  MapPin, 
  DollarSign, 
  Star, 
  Clock, 
  Filter,
  X
} from 'lucide-react';

interface SearchFiltersProps {
  className?: string;
}

export function SearchFilters({ className = '' }: SearchFiltersProps) {
  const router = useRouter();
  const [filters, setFilters] = useState({
    location: '',
    radius: '10',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    availability: {
      dayOfWeek: '',
      startTime: '',
      endTime: '',
    },
    amenities: [] as string[],
    specialties: [] as string[],
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleAvailabilityChange = (key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [key]: value
      }
    }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSpecialtyToggle = (specialty: string) => {
    setFilters(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== '') {
        if (key === 'availability') {
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (subValue && subValue !== '') {
              params.set(`availability.${subKey}`, subValue);
            }
          });
        } else if (Array.isArray(value) && value.length > 0) {
          params.set(key, value.join(','));
        } else if (!Array.isArray(value)) {
          params.set(key, value);
        }
      }
    });

    router.push(`/search?${params.toString()}`);
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      radius: '10',
      minPrice: '',
      maxPrice: '',
      minRating: '',
      availability: {
        dayOfWeek: '',
        startTime: '',
        endTime: '',
      },
      amenities: [],
      specialties: [],
    });
  };

  const amenityOptions = [
    'Parking',
    'Locker Rooms',
    'Showers',
    'Sauna',
    'Pool',
    'Group Classes',
    'Personal Training',
    'Cardio Equipment',
    'Weight Training',
    'Yoga Studio',
  ];

  const specialtyOptions = [
    'Weight Loss',
    'Muscle Building',
    'Cardio Training',
    'Yoga',
    'Pilates',
    'CrossFit',
    'Boxing',
    'Swimming',
    'Dance',
    'Rehabilitation',
  ];

  const dayOptions = [
    { value: '', label: 'Any day' },
    { value: '0', label: 'Sunday' },
    { value: '1', label: 'Monday' },
    { value: '2', label: 'Tuesday' },
    { value: '3', label: 'Wednesday' },
    { value: '4', label: 'Thursday' },
    { value: '5', label: 'Friday' },
    { value: '6', label: 'Saturday' },
  ];

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Exactly What You're Looking For
          </h2>
          <p className="text-lg text-gray-600">
            Use our advanced filters to narrow down your search and find the perfect match
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          {/* Basic Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="City or ZIP code"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Radius
              </label>
              <Select
                value={filters.radius}
                onChange={(e) => handleFilterChange('radius', e.target.value)}
              >
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
                <option value="25">25 miles</option>
                <option value="50">50 miles</option>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="number"
                  placeholder="0"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="number"
                  placeholder="1000"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex justify-center mb-6">
            <Button
              variant="outline"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center"
            >
              <Filter className="mr-2 h-4 w-4" />
              {showAdvanced ? 'Hide' : 'Show'} Advanced Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showAdvanced && (
            <div className="space-y-6">
              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Rating
                </label>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Select
                    value={filters.minRating}
                    onChange={(e) => handleFilterChange('minRating', e.target.value)}
                  >
                    <option value="">Any rating</option>
                    <option value="1">1+ stars</option>
                    <option value="2">2+ stars</option>
                    <option value="3">3+ stars</option>
                    <option value="4">4+ stars</option>
                    <option value="5">5 stars only</option>
                  </Select>
                </div>
              </div>

              {/* Availability Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select
                    value={filters.availability.dayOfWeek}
                    onChange={(e) => handleAvailabilityChange('dayOfWeek', e.target.value)}
                  >
                    {dayOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="time"
                      placeholder="Start time"
                      value={filters.availability.startTime}
                      onChange={(e) => handleAvailabilityChange('startTime', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="time"
                      placeholder="End time"
                      value={filters.availability.endTime}
                      onChange={(e) => handleAvailabilityChange('endTime', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Amenities Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amenities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {amenityOptions.map(amenity => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity)}
                        onChange={() => handleAmenityToggle(amenity)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Specialties Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialties
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {specialtyOptions.map(specialty => (
                    <label key={specialty} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.specialties.includes(specialty)}
                        onChange={() => handleSpecialtyToggle(specialty)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{specialty}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              onClick={handleSearch}
              size="lg"
              className="btn-primary btn-lg"
            >
              Search Now
            </Button>
            <Button
              onClick={clearFilters}
              variant="outline"
              size="lg"
              className="btn-outline btn-lg"
            >
              <X className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
