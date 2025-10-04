import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Star, MapPin, Clock, Award, Heart, Calendar } from 'lucide-react';
import { PersonalTrainer } from '@/types';

interface TrainerCardProps {
  trainer: PersonalTrainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  const getAvailabilityText = () => {
    const today = new Date().getDay();
    const todayAvailability = trainer.availability.find(a => a.dayOfWeek === today);
    
    if (!todayAvailability || !todayAvailability.isAvailable) {
      return 'Not available today';
    }
    
    return `Available today ${todayAvailability.startTime} - ${todayAvailability.endTime}`;
  };

  const getSpecialtiesText = () => {
    if (trainer.specialties.length <= 3) {
      return trainer.specialties.join(', ');
    }
    return `${trainer.specialties.slice(0, 3).join(', ')} +${trainer.specialties.length - 3} more`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={trainer.profile.avatar || '/api/placeholder/200/200'}
                alt={`${trainer.profile.firstName} ${trainer.profile.lastName}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {trainer.profile.firstName} {trainer.profile.lastName}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {trainer.experience} years experience
                </p>
              </div>
              <div className="flex items-center text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm font-medium">{trainer.rating}</span>
                <span className="ml-1 text-sm text-gray-500">({trainer.reviewCount})</span>
              </div>
            </div>

            {/* Location */}
            {trainer.profile.location && (
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">
                  {trainer.profile.location.city}, {trainer.profile.location.state}
                </span>
              </div>
            )}

            {/* Availability */}
            <div className="flex items-center text-gray-600 mb-3">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{getAvailabilityText()}</span>
            </div>

            {/* Bio */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {trainer.bio}
            </p>

            {/* Specialties */}
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Specialties:</strong> {getSpecialtiesText()}
              </p>
              <div className="flex flex-wrap gap-1">
                {trainer.specialties.slice(0, 3).map((specialty) => (
                  <Badge key={specialty} variant="default" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {trainer.specialties.length > 3 && (
                  <Badge variant="default" className="text-xs">
                    +{trainer.specialties.length - 3} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Award className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm font-medium text-gray-700">Certifications:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {trainer.certifications.map((cert) => (
                  <Badge key={cert} variant="primary" className="text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Link href={`/trainers/${trainer.id}`}>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </Link>
                <Link href={`/trainers/${trainer.id}/book`}>
                  <Button size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    Book Session
                  </Button>
                </Link>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">
                  ${trainer.hourlyRate}
                  <span className="text-sm font-normal text-gray-500">/hour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Favorite Button */}
          <div className="flex-shrink-0">
            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
