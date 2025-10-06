import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  MapPin, 
  Clock, 
  Tag, 
  Heart, 
  Share2, 
  Calendar,
  Building2,
  User
} from 'lucide-react';
import { Offer } from '@/types';

interface OfferCardProps {
  offer: Offer;
  viewMode: 'grid' | 'list';
}

export function OfferCard({ offer, viewMode }: OfferCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const getOfferTypeIcon = () => {
    return offer.offerType === 'GYM_OFFER' ? (
      <Building2 className="h-4 w-4" />
    ) : (
      <User className="h-4 w-4" />
    );
  };

  const getOfferTypeLabel = () => {
    return offer.offerType === 'GYM_OFFER' ? 'Gym Offer' : 'Personal Trainer';
  };

  const images = offer.imageUrls ? offer.imageUrls.split(',') : [];

  if (viewMode === 'list') {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-80 flex-shrink-0">
            <div className="relative h-48 md:h-full">
              <Image
                src={images[0] || '/api/placeholder/400/300'}
                alt={offer.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 text-white">
                  <Tag className="h-3 w-3 mr-1" />
                  Limited Time
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getOfferTypeIcon()}
                <span className="text-sm text-gray-600">{getOfferTypeLabel()}</span>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Share2 className="h-4 w-4" />
              </button>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
              {offer.title}
            </h3>

            {offer.durationDescription && (
              <div className="flex items-center text-gray-600 mb-3">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{offer.durationDescription}</span>
              </div>
            )}

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {offer.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-primary-600">
                {formatPrice(offer.price)}
                <span className="text-sm font-normal text-gray-500 ml-1">
                  {offer.currency || 'USD'}
                </span>
              </div>
              <Link href={`/offers/${offer.id}`}>
                <Button>View Offer</Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={images[0] || '/api/placeholder/400/300'}
            alt={offer.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-4 left-4">
          <Badge className="bg-red-500 text-white">
            <Tag className="h-3 w-3 mr-1" />
            Limited Time
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
            <Share2 className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          {getOfferTypeIcon()}
          <span className="text-sm text-gray-600">{getOfferTypeLabel()}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {offer.title}
        </h3>

        {offer.durationDescription && (
          <div className="flex items-center text-gray-600 mb-3">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{offer.durationDescription}</span>
          </div>
        )}

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {offer.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-primary-600">
              {formatPrice(offer.price)}
            </div>
            <div className="text-sm text-gray-500">
              {offer.currency || 'USD'}
            </div>
          </div>
          <Link href={`/offers/${offer.id}`}>
            <Button>View Offer</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
