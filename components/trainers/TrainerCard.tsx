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
                src={trainer.profileImageUrl || '/api/placeholder/200/200'}
                alt={`${trainer.firstName} ${trainer.lastName}`}
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
                  {trainer.firstName} {trainer.lastName}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {trainer.experience} years experience
                </p>
              </div>
              <div className="flex items-center text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm font-medium">{trainer.averageRating}</span>
                <span className="ml-1 text-sm text-gray-500">({trainer.totalRatings})</span>
              </div>
            </div>

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
            <div className="flex items-center text-gray-600 mb-4">
              <Award className="h-4 w-4 mr-1" />
              <span className="text-sm">{trainer.certifications.length} certifications</span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-primary-600">
                ${trainer.hourlyRate}/hr
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
                <Link href={`/trainers/${trainer.id}`}>
                  <Button size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
