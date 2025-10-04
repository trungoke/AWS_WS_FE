import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Star, MapPin, Clock, Tag } from 'lucide-react';

// Mock data
const featuredOffers = [
  {
    id: '1',
    title: 'New Member Special - 50% Off First Month',
    gym: 'FitLife Gym',
    location: 'Downtown, New York',
    price: 45,
    originalPrice: 89,
    type: 'GYM_OFFER',
    duration: 30,
    rating: 4.8,
    image: '/api/placeholder/300/200',
    description: 'Join now and get 50% off your first month membership. Includes access to all facilities and group classes.',
  },
  {
    id: '2',
    title: 'Personal Training Package - 10 Sessions',
    trainer: 'Sarah Johnson',
    location: 'Los Angeles, CA',
    price: 750,
    originalPrice: 850,
    type: 'PT_OFFER',
    duration: 60,
    rating: 4.9,
    image: '/api/placeholder/300/200',
    description: 'Comprehensive personal training package with nutrition guidance and workout plans.',
  },
  {
    id: '3',
    title: 'Group Fitness Classes - Unlimited Access',
    gym: 'Zen Wellness Center',
    location: 'San Francisco, CA',
    price: 99,
    originalPrice: 150,
    type: 'GYM_OFFER',
    duration: 30,
    rating: 4.7,
    image: '/api/placeholder/300/200',
    description: 'Unlimited access to all group fitness classes including yoga, pilates, and meditation.',
  },
];

export function FeaturedOffers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-gray-600">
            Don't miss out on these limited-time deals from our partner gyms and trainers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredOffers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow relative">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  <Tag className="h-3 w-3 mr-1" />
                  Limited Time
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {offer.title}
                  </h3>
                  <div className="flex items-center text-yellow-500 ml-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{offer.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    {offer.type === 'GYM_OFFER' ? offer.gym : offer.trainer} • {offer.location}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {offer.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-primary-600">${offer.price}</span>
                    {offer.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${offer.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{offer.duration} days</span>
                  </div>
                </div>

                <Link href={`/offers/${offer.id}`}>
                  <Button className="w-full">View Offer</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/offers">
            <Button size="lg">View All Offers</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
