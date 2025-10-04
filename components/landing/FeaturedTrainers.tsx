import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Star, MapPin, Clock, Award } from 'lucide-react';

// Mock data - in real app, this would come from API
const featuredTrainers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Certified Personal Trainer',
    location: 'New York, NY',
    rating: 4.9,
    reviewCount: 87,
    hourlyRate: 85,
    experience: 8,
    specialties: ['Weight Loss', 'Strength Training', 'Nutrition'],
    certifications: ['NASM-CPT', 'Precision Nutrition'],
    image: '/api/placeholder/200/200',
    bio: 'Passionate about helping clients achieve their fitness goals through personalized training programs.',
  },
  {
    id: '2',
    name: 'Mike Chen',
    title: 'Strength & Conditioning Coach',
    location: 'Los Angeles, CA',
    rating: 4.7,
    reviewCount: 64,
    hourlyRate: 95,
    experience: 12,
    specialties: ['Athletic Performance', 'Olympic Lifting', 'Injury Prevention'],
    certifications: ['CSCS', 'USAW Level 1'],
    image: '/api/placeholder/200/200',
    bio: 'Former competitive athlete with expertise in sports-specific training and performance optimization.',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    title: 'Yoga & Wellness Instructor',
    location: 'San Francisco, CA',
    rating: 4.8,
    reviewCount: 92,
    hourlyRate: 75,
    experience: 6,
    specialties: ['Yoga', 'Pilates', 'Meditation', 'Stress Management'],
    certifications: ['RYT-500', 'PMA-CPT'],
    image: '/api/placeholder/200/200',
    bio: 'Holistic approach to fitness focusing on mind-body connection and sustainable wellness practices.',
  },
];

export function FeaturedTrainers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Personal Trainers
          </h2>
          <p className="text-lg text-gray-600">
            Work with certified professionals who are passionate about your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTrainers.map((trainer) => (
            <Card key={trainer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{trainer.title}</p>
                
                <div className="flex items-center justify-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{trainer.location}</span>
                </div>

                <div className="flex items-center justify-center text-yellow-500 mb-4">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm font-medium">{trainer.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({trainer.reviewCount} reviews)</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {trainer.bio}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {trainer.specialties.slice(0, 2).map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                      >
                        {specialty}
                      </span>
                    ))}
                    {trainer.specialties.length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        +{trainer.specialties.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center mb-4">
                  <Award className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">{trainer.experience} years experience</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">
                    ${trainer.hourlyRate}
                    <span className="text-sm font-normal text-gray-500">/hour</span>
                  </div>
                  <Link href={`/trainers/${trainer.id}`}>
                    <Button>View Profile</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/trainers">
            <Button size="lg">View All Trainers</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
