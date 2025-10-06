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
    <div className="group perspective-1000 animate-fade-in-up">
      <div className="glass-card rounded-3xl overflow-hidden shadow-3d-lg group-hover:shadow-neon-lg border border-primary-600/20 group-hover:border-primary-600/50 transform-3d transition-all duration-700 hover:scale-105 hover:-translate-y-6">
        {/* Animated glow border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-700" />
        
        {/* Profile Section with Epic Effects */}
        <div className="relative p-8 pb-4">
          <div className="text-center">
            {/* 3D Profile Image */}
            <div className="relative mx-auto w-32 h-32 perspective-1000 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full blur-xl opacity-0 group-hover:opacity-50 animate-glow-pulse" />
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-600/50 group-hover:border-primary-500 shadow-neon group-hover:shadow-neon-lg transition-all duration-500 transform-3d group-hover:scale-110 group-hover:rotate-6">
                <img
                  src={trainer.profileImageUrl || '/api/placeholder/200/200'}
                  alt={`${trainer.firstName} ${trainer.lastName}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
              </div>
              
              {/* Availability Status */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-1 px-3 py-1 rounded-full glass-card border border-green-500/50 shadow-glow">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400 font-bold uppercase">Available</span>
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-gradient transition-all duration-300">
              {trainer.firstName} {trainer.lastName}
            </h3>
            
            <p className="text-primary-400 font-bold text-sm uppercase tracking-wider mb-4">
              {trainer.specialties[0]} Specialist
            </p>

            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-primary-600/30 mb-6">
              <Award className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-primary-400 font-bold">
                {trainer.experience} Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {/* Rating with Epic Stars */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 transition-all duration-300 ${
                    i < Math.floor(trainer.averageRating || 0) 
                      ? 'text-yellow-500 fill-yellow-500 group-hover:scale-125' 
                      : 'text-gray-600'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <span className="text-white font-bold">{trainer.averageRating}</span>
            <span className="text-gray-500 text-sm">({trainer.totalRatings} reviews)</span>
          </div>

          {/* Bio */}
          <p className="text-gray-500 text-sm mb-6 line-clamp-3 group-hover:text-gray-400 transition-colors leading-relaxed">
            {trainer.bio}
          </p>

          {/* Specialties Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {trainer.specialties.slice(0, 3).map((specialty, i) => (
              <span 
                key={specialty}
                className="text-xs px-3 py-1 rounded-full bg-primary-600/10 text-primary-400 border border-primary-600/30 font-bold uppercase tracking-wider hover:bg-primary-600/20 hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {specialty}
              </span>
            ))}
            {trainer.specialties.length > 3 && (
              <span className="text-xs px-3 py-1 rounded-full bg-dark-700/50 text-gray-400 border border-dark-600 font-bold">
                +{trainer.specialties.length - 3}
              </span>
            )}
          </div>

          {/* Certifications */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 text-gray-600 group-hover:text-gray-500 transition-colors">
              <Award className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium">{trainer.certifications.length} certifications</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-black text-gradient">
                ${trainer.hourlyRate}
              </div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">per hour</div>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 glass-card p-3 rounded-xl border border-primary-600/30 hover:border-primary-600 hover:shadow-glow transition-all duration-300 group/heart">
                <Heart className="h-5 w-5 text-primary-500 mx-auto group-hover/heart:scale-125 transition-transform duration-300" />
              </button>
              
              <Link href={`/trainers/${trainer.id}`} className="flex-[3]">
                <Button className="btn-primary w-full shadow-glow group/btn relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <Calendar className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10 font-bold">VIEW PROFILE</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

