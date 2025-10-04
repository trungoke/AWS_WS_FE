'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  Mail, 
  Heart,
  Share2,
  Calendar,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';
import { Gym, Review } from '@/types';

// Mock data - in real app, this would come from API
const mockGym: Gym = {
  id: '1',
  name: 'FitLife Gym',
  description: 'State-of-the-art fitness facility with premium equipment and expert trainers. We offer a comprehensive range of fitness programs designed to help you achieve your health and wellness goals. Our modern facility features cutting-edge equipment, spacious workout areas, and a supportive community atmosphere.',
  location: {
    id: '1',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    latitude: 40.7128,
    longitude: -74.0060,
  },
  contactInfo: {
    phone: '(555) 123-4567',
    email: 'info@fitlifegym.com',
    website: 'https://fitlifegym.com',
  },
  images: [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
  ],
  rating: 4.8,
  reviewCount: 124,
  amenities: [
    'Parking',
    'Pool',
    'Sauna',
    'Group Classes',
    'Personal Training',
    'Cardio Equipment',
    'Weight Training',
    'Locker Rooms',
    'Showers',
    'Childcare',
  ],
  operatingHours: [
    { dayOfWeek: 1, openTime: '06:00', closeTime: '22:00', isClosed: false },
    { dayOfWeek: 2, openTime: '06:00', closeTime: '22:00', isClosed: false },
    { dayOfWeek: 3, openTime: '06:00', closeTime: '22:00', isClosed: false },
    { dayOfWeek: 4, openTime: '06:00', closeTime: '22:00', isClosed: false },
    { dayOfWeek: 5, openTime: '06:00', closeTime: '22:00', isClosed: false },
    { dayOfWeek: 6, openTime: '08:00', closeTime: '20:00', isClosed: false },
    { dayOfWeek: 0, openTime: '08:00', closeTime: '18:00', isClosed: false },
  ],
  isActive: true,
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
};

const mockReviews: Review[] = [
  {
    id: '1',
    userId: '1',
    targetId: '1',
    targetType: 'GYM',
    rating: 5,
    comment: 'Amazing gym with top-notch equipment and friendly staff. The trainers are knowledgeable and always willing to help.',
    isVerified: true,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    userId: '2',
    targetId: '1',
    targetType: 'GYM',
    rating: 4,
    comment: 'Great facility with clean equipment. The group classes are fantastic and the instructors are motivating.',
    isVerified: true,
    createdAt: '2024-01-10T14:20:00Z',
    updatedAt: '2024-01-10T14:20:00Z',
  },
  {
    id: '3',
    userId: '3',
    targetId: '1',
    targetType: 'GYM',
    rating: 5,
    comment: 'Love this gym! The pool and sauna are perfect for recovery after intense workouts. Highly recommended!',
    isVerified: true,
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
  },
];

export default function GymDetailPage() {
  const params = useParams();
  const [gym, setGym] = useState<Gym | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    // In a real app, this would fetch data from API
    const fetchGym = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setGym(mockGym);
      setReviews(mockReviews);
      setIsLoading(false);
    };

    fetchGym();
  }, [params.id]);

  const formatOperatingHours = (hours: typeof gym.operatingHours) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return hours.map(hour => ({
      day: dayNames[hour.dayOfWeek],
      hours: hour.isClosed ? 'Closed' : `${hour.openTime} - ${hour.closeTime}`,
      isClosed: hour.isClosed,
    }));
  };

  const handleContact = () => {
    // In a real app, this would open a contact modal or redirect to contact form
    window.location.href = `tel:${gym?.contactInfo.phone}`;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: gym?.name,
        text: gym?.description,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-64 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
              <div className="h-96 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!gym) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Gym not found</h1>
            <p className="text-gray-600 mb-8">The gym you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link href="/gyms">Browse All Gyms</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{gym.name}</h1>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-5 w-5 mr-1" />
                <span>
                  {gym.location.address}, {gym.location.city}, {gym.location.state} {gym.location.zipCode}
                </span>
              </div>
              <div className="flex items-center text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 text-lg font-medium">{gym.rating}</span>
                <span className="ml-1 text-gray-500">({gym.reviewCount} reviews)</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsFavorited(!isFavorited)}
                className={isFavorited ? 'text-red-500' : ''}
              >
                <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                {isFavorited ? 'Favorited' : 'Add to Favorites'}
              </Button>
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Images */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={gym.images[selectedImage] || '/api/placeholder/800/600'}
                    alt={gym.name}
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {selectedImage + 1} of {gym.images.length}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex space-x-2 overflow-x-auto">
                    {gym.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                          selectedImage === index ? 'ring-2 ring-primary-500' : ''
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${gym.name} ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About {gym.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{gym.description}</p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {gym.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({gym.reviewCount})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          {review.isVerified && (
                            <Badge variant="success" className="ml-2 text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {gym.contactInfo.phone && (
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-3" />
                    <a
                      href={`tel:${gym.contactInfo.phone}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {gym.contactInfo.phone}
                    </a>
                  </div>
                )}
                {gym.contactInfo.email && (
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-3" />
                    <a
                      href={`mailto:${gym.contactInfo.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {gym.contactInfo.email}
                    </a>
                  </div>
                )}
                {gym.contactInfo.website && (
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-gray-400 mr-3" />
                    <a
                      href={gym.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
                <Button onClick={handleContact} className="w-full">
                  Contact Gym
                </Button>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Operating Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {formatOperatingHours(gym.operatingHours).map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {schedule.day}
                      </span>
                      <span className={`text-sm ${schedule.isClosed ? 'text-red-500' : 'text-gray-600'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full">
                  <Link href={`/gyms/${gym.id}/book`}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book a Visit
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/gyms/${gym.id}/offers`}>
                    <Award className="h-4 w-4 mr-2" />
                    View Offers
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/gyms/${gym.id}/trainers`}>
                    <Users className="h-4 w-4 mr-2" />
                    Find Trainers
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
