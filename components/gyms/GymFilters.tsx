'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { MapPin, DollarSign, Star, Clock, X } from 'lucide-react';

interface GymFiltersProps {
  onSearch: (filters: any) => void;
}

export function GymFilters({ onSearch }: GymFiltersProps) {
  const [filters, setFilters] = useState({
    location: '',
    radius: '10',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    amenities: [] as string[],
    operatingHours: {
      dayOfWeek: '',
      startTime: '',
      endTime: '',
    },
  });

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
    'Spa Services',
    'Childcare',
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

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleOperatingHoursChange = (key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      operatingHours: {
        ...prev.operatingHours,
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

  const handleSearch = () => {
    onSearch(filters);
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      radius: '10',
      minPrice: '',
      maxPrice: '',
      minRating: '',
      amenities: [],
      operatingHours: {
        dayOfWeek: '',
        startTime: '',
        endTime: '',
      },
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="City or ZIP"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Radius */}
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

        {/* Min Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min Price
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="number"
              placeholder="0"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Price
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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

      {/* Rating Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Minimum Rating
        </label>
        <div className="flex items-center space-x-2">
          <Star className="h-4 w-4 text-yellow-400" />
          <Select
            value={filters.minRating}
            onChange={(e) => handleFilterChange('minRating', e.target.value)}
            className="max-w-xs"
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

      {/* Operating Hours */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Operating Hours
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select
            value={filters.operatingHours.dayOfWeek}
            onChange={(e) => handleOperatingHoursChange('dayOfWeek', e.target.value)}
          >
            {dayOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="time"
              placeholder="Start time"
              value={filters.operatingHours.startTime}
              onChange={(e) => handleOperatingHoursChange('startTime', e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="time"
              placeholder="End time"
              value={filters.operatingHours.endTime}
              onChange={(e) => handleOperatingHoursChange('endTime', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amenities
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-end">
        <Button
          onClick={clearFilters}
          variant="outline"
          className="flex items-center"
        >
          <X className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
        <Button
          onClick={handleSearch}
          className="btn-primary"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}

