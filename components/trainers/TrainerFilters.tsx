'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { MapPin, DollarSign, Star, Clock, X, Award } from 'lucide-react';

interface TrainerFiltersProps {
  onSearch: (filters: any) => void;
}

export function TrainerFilters({ onSearch }: TrainerFiltersProps) {
  const [filters, setFilters] = useState({
    location: '',
    radius: '10',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    experience: '',
    specialties: [] as string[],
    certifications: [] as string[],
    availability: {
      dayOfWeek: '',
      startTime: '',
      endTime: '',
    },
  });

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
    'Athletic Performance',
    'Olympic Lifting',
    'Injury Prevention',
    'Sports Training',
    'Meditation',
    'Stress Management',
    'Flexibility',
    'Nutrition',
    'Strength Training',
  ];

  const certificationOptions = [
    'NASM-CPT',
    'ACSM-CPT',
    'ACE-CPT',
    'CSCS',
    'USAW Level 1',
    'FMS Level 1',
    'RYT-200',
    'RYT-500',
    'PMA-CPT',
    'Precision Nutrition',
    'CPR/AED',
    'First Aid',
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

  const experienceOptions = [
    { value: '', label: 'Any experience' },
    { value: '1', label: '1+ years' },
    { value: '3', label: '3+ years' },
    { value: '5', label: '5+ years' },
    { value: '10', label: '10+ years' },
  ];

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

  const handleSpecialtyToggle = (specialty: string) => {
    setFilters(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const handleCertificationToggle = (certification: string) => {
    setFilters(prev => ({
      ...prev,
      certifications: prev.certifications.includes(certification)
        ? prev.certifications.filter(c => c !== certification)
        : [...prev.certifications, certification]
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
      experience: '',
      specialties: [],
      certifications: [],
      availability: {
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
            Min Price/Hour
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
            Max Price/Hour
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="number"
              placeholder="200"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Rating and Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating
          </label>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-400" />
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience Level
          </label>
          <Select
            value={filters.experience}
            onChange={(e) => handleFilterChange('experience', e.target.value)}
          >
            {experienceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
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
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="time"
              placeholder="Start time"
              value={filters.availability.startTime}
              onChange={(e) => handleAvailabilityChange('startTime', e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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

      {/* Specialties */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Specialties
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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

      {/* Certifications */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Award className="inline h-4 w-4 mr-1" />
          Certifications
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {certificationOptions.map(certification => (
            <label key={certification} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.certifications.includes(certification)}
                onChange={() => handleCertificationToggle(certification)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{certification}</span>
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

