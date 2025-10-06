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
  Mail, 
  Heart,
  Share2,
  Calendar,
  Award,
  CheckCircle,
  Users,
  DollarSign
} from 'lucide-react';
import { PersonalTrainer, Review } from '@/types';

// Mock data - in real app, this would come from API
const mockTrainer: PersonalTrainer = {
  id: '1',
  userId: '1',
  firstName: 'Sarah',
  lastName: 'Johnson',
  phoneNumber: '(555) 123-4567',
  profileImageUrl: '/api/placeholder/300/300',
  bio: 'Passionate about helping clients achieve their fitness goals through personalized training programs. I specialize in weight loss, strength training, and nutrition guidance. With over 8 years of experience, I\'ve helped hundreds of clients transform their lives and reach their health and fitness goals.',
  specialties: ['Weight Loss', 'Strength Training', 'Nutrition', 'Cardio Training', 'Bodybuilding'],
  certifications: ['NASM-CPT', 'Precision Nutrition', 'CPR/AED', 'First Aid'],
  experience: 8,
  hourlyRate: 85,
  averageRating: 4.9,
  totalRatings: 87,
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
};

const mockReviews: Review[] = [
  {
    id: '1',
    userId: '1',
    offerId: '1',
    rating: 5,
    comment: 'Sarah is an amazing trainer! She helped me lose 30 pounds and completely transformed my lifestyle. Her approach is personalized and she really cares about her clients\' success.',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    userId: '2',
    offerId: '1',
    rating: 5,
    comment: 'Professional, knowledgeable, and motivating. Sarah\'s nutrition guidance was particularly helpful. I\'ve seen incredible results in just 3 months!',
    createdAt: '2024-01-10T14:20:00Z',
    updatedAt: '2024-01-10T14:20:00Z',
  },
  {
    id: '3',
    userId: '3',
    offerId: '1',
    rating: 4,
    comment: 'Great trainer with a lot of experience. The workouts are challenging but fun. Highly recommend for anyone serious about their fitness goals.',
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
  },
];

export default function TrainerDetailPage() {
  const params = useParams();
  const [trainer, setTrainer] = useState<PersonalTrainer | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    // In a real app, this would fetch data from API
    const fetchTrainer = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTrainer(mockTrainer);
      setReviews(mockReviews);
      setIsLoading(false);
    };

    fetchTrainer();
  }, [params.id]);

  const formatAvailability = (availability: PersonalTrainer['availability']) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return availability.map(avail => ({
      day: dayNames[avail.dayOfWeek],
      hours: avail.isAvailable ? `${avail.startTime} - ${avail.endTime}` : 'Not available',
      isAvailable: avail.isAvailable,
    }));
  };

  const handleContact = () => {
    // In a real app, this would open a contact modal or redirect to contact form
    if (trainer?.phoneNumber) {
      window.location.href = `tel:${trainer.phoneNumber}`;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${trainer?.firstName} ${trainer?.lastName} - Personal Trainer`,
        text: trainer?.bio,
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

  if (!trainer) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Trainer not found</h1>
            <p className="text-gray-600 mb-8">The trainer you're looking for doesn't exist or has been removed.</p>
            <Link href="/trainers" className="btn btn-primary">
              Browse All Trainers
            </Link>
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
            <div className="flex items-start space-x-6">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src={trainer.profileImageUrl || '/api/placeholder/300/300'}
                  alt={`${trainer.firstName} ${trainer.lastName}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {trainer.firstName} {trainer.lastName}
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  Personal Trainer • {trainer.experience} years experience
                </p>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1 text-lg font-medium">{trainer.averageRating}</span>
                  <span className="ml-1 text-gray-500">({trainer.totalRatings} reviews)</span>
                </div>
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
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About {trainer.firstName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{trainer.bio}</p>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle>Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {trainer.specialties.map((specialty) => (
                    <div key={specialty} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trainer.certifications.map((cert) => (
                    <div key={cert} className="flex items-center">
                      <Award className="h-5 w-5 text-primary-500 mr-3" />
                      <span className="text-sm font-medium text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({trainer.totalRatings})</CardTitle>
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
            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    ${trainer.hourlyRate}
                  </div>
                  <div className="text-gray-500">per hour</div>
                </div>
                <Link href={`/trainers/${trainer.id}/book`} className="btn btn-primary w-full mb-3 flex items-center justify-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book a Session
                </Link>
                <Link href={`/trainers/${trainer.id}/packages`} className="btn btn-outline w-full flex items-center justify-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  View Packages
                </Link>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trainer.phoneNumber && (
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-3" />
                    <a
                      href={`tel:${trainer.phoneNumber}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {trainer.phoneNumber}
                    </a>
                  </div>
                )}
                <Button onClick={handleContact} className="w-full">
                  Contact Trainer
                </Button>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {formatAvailability(trainer.availability).map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {schedule.day}
                      </span>
                      <span className={`text-sm ${schedule.isAvailable ? 'text-green-600' : 'text-red-500'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Attached Gyms */}
            <Card>
              <CardHeader>
                <CardTitle>Available at Gyms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      {trainer.attachedGyms.length} gym{trainer.attachedGyms.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <Link href={`/trainers/${trainer.id}/gyms`} className="btn btn-outline w-full">
                    View Gyms
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
