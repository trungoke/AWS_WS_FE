import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Star, MapPin, Clock, Phone, Globe, Heart } from 'lucide-react';
import { Gym } from '@/types';

interface GymCardProps {
  gym: Gym;
}

export function GymCard({ gym }: GymCardProps) {
  // Note: Operating hours not available in current API structure
  const getOperatingStatus = () => {
    return 'Open today 6:00 AM - 10:00 PM'; // Placeholder
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Image */}
        <div className="md:col-span-1">
          <div className="aspect-w-16 aspect-h-9 relative">
            <Image
              src="/api/placeholder/400/300"
              alt={gym.name}
              fill
              className="object-cover rounded-lg"
            />
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
              <Heart className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{gym.name}</h3>
            <div className="flex items-center text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 text-sm font-medium">{gym.averageRating || 0}</span>
              <span className="ml-1 text-sm text-gray-500">({gym.totalRatings || 0})</span>
            </div>
          </div>

          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">
              {gym.address}, {gym.city}, {gym.state} {gym.postalCode}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {gym.description}
          </p>

          {/* Contact Info */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
            {gym.phoneNumber && (
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>{gym.phoneNumber}</span>
              </div>
            )}
            {gym.website && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                <a 
                  href={gym.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-600"
                >
                  Website
                </a>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/gyms/${gym.id}`}>
                  View Details
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={`/gyms/${gym.id}/contact`}>
                  Contact
                </Link>
              </Button>
            </div>
            <div className="text-sm text-gray-500">
              Member since {new Date(gym.createdAt).getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
