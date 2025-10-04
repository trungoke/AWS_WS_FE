'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Star, 
  MapPin, 
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
  address: '123 Main St',
  city: 'New York',
  state: 'NY',
  country: 'USA',
  postalCode: '10001',
  phoneNumber: '(555) 123-4567',
  email: 'info@fitlifegym.com',
  website: 'https://fitlifegym.com',
  latitude: 40.7128,
  longitude: -74.0060,
  averageRating: 4.8,
  totalRatings: 124,
  isActive: true,
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
};

const mockReviews: Review[] = [
  {
    id: '1',
    userId: '1',
    offerId: '1',
    rating: 5,
    comment: 'Amazing gym with top-notch equipment and friendly staff. The trainers are knowledgeable and always willing to help.',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    userId: '2',
    offerId: '1',
    rating: 4,
    comment: 'Great facility with clean equipment. The group classes are fantastic and the instructors are motivating.',
    createdAt: '2024-01-10T14:20:00Z',
    updatedAt: '2024-01-10T14:20:00Z',
  },
  {
    id: '3',
    userId: '3',
    offerId: '1',
    rating: 5,
    comment: 'Love this gym! Perfect for recovery after intense workouts. Highly recommended!',
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
  },
];

export default function GymDetailPage() {
  const params = useParams();
  const [gym, setGym] = useState<Gym | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

  const handleContact = () => {
    if (gym?.phoneNumber) {
      window.location.href = `tel:${gym.phoneNumber}`;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: gym?.name,
        text: gym?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-dark-800 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-dark-800 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-64 bg-dark-800 rounded"></div>
                <div className="h-32 bg-dark-800 rounded"></div>
              </div>
              <div className="h-96 bg-dark-800 rounded"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!gym) {
    return (
      <div className="min-h-screen bg-dark-900">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Gym not found</h1>
            <p className="text-gray-400 mb-8">The gym you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="btn-primary">
              <Link href="/gyms">Browse All Gyms</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-black text-white mb-2">{gym.name}</h1>
              <div className="flex items-center text-gray-400 mb-2">
                <MapPin className="h-5 w-5 mr-1 text-primary-500" />
                <span>
                  {gym.address}, {gym.city}, {gym.state} {gym.postalCode}
                </span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-primary-500 text-primary-500" />
                <span className="ml-1 text-lg font-bold text-white">{gym.averageRating}</span>
                <span className="ml-1 text-gray-400">({gym.totalRatings} reviews)</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="btn-outline"
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-primary-500 text-primary-500' : ''}`} />
                {isFavorited ? 'Favorited' : 'Favorite'}
              </Button>
              <Button variant="outline" className="btn-outline" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>About {gym.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{gym.description}</p>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Reviews ({gym.totalRatings})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-dark-700 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'fill-primary-500 text-primary-500' : 'text-dark-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {gym.phoneNumber && (
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary-500 mr-3" />
                    <a
                      href={`tel:${gym.phoneNumber}`}
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      {gym.phoneNumber}
                    </a>
                  </div>
                )}
                {gym.email && (
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary-500 mr-3" />
                    <a
                      href={`mailto:${gym.email}`}
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      {gym.email}
                    </a>
                  </div>
                )}
                {gym.website && (
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-primary-500 mr-3" />
                    <a
                      href={gym.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
                <Button onClick={handleContact} className="w-full btn-primary">
                  Contact Gym
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full btn-primary">
                  <Link href={`/gyms/${gym.id}/book`}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book a Visit
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full btn-outline">
                  <Link href={`/gyms/${gym.id}/offers`}>
                    <Award className="h-4 w-4 mr-2" />
                    View Offers
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full btn-outline">
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
