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
  User,
  ArrowRight
} from 'lucide-react';
import { Offer } from '@/types';

interface OfferCardProps {
  offer: Offer;
  discount?: number;
  savings?: number;
}

export function OfferCard({ offer, discount = 0, savings = 0 }: OfferCardProps) {
  const images = offer.imageUrls ? offer.imageUrls.split(',') : [];
  const isGymOffer = offer.offerType === 'GYM_OFFER';

  return (
    <div className="group perspective-1000 animate-fade-in-up">
      <div className="glass-card rounded-3xl overflow-hidden shadow-3d-lg group-hover:shadow-neon-lg border border-primary-600/20 group-hover:border-red-600/50 transform-3d transition-all duration-700 hover:scale-105 hover:-translate-y-6">
        {/* Epic glow border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-primary-700 to-red-600 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition duration-700" />

        {/* Discount Badge - Top Left */}
        <div className="absolute top-4 left-4 z-30">
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 blur-lg opacity-50 animate-pulse" />
            <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 shadow-neon-lg text-white">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-black uppercase tracking-wider">
                {discount}% OFF
              </span>
            </div>
          </div>
        </div>

        {/* Timer Badge - Top Right */}
        <div className="absolute top-4 right-4 z-30">
          <div className="glass-card px-3 py-2 rounded-xl border border-yellow-500/50 shadow-glow">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-yellow-500 animate-pulse" />
              <span className="text-xs text-yellow-400 font-bold">2 Days Left</span>
            </div>
          </div>
        </div>

        {/* SAVINGS Badge - Bottom Right over image */}
        {savings > 0 && (
          <div className="absolute bottom-4 right-4 z-30">
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 blur-lg opacity-40" />
              <div className="relative glass-card px-4 py-2 rounded-xl border border-green-500/50 shadow-glow">
                <div className="text-center">
                  <div className="text-lg font-black text-green-400">SAVE</div>
                  <div className="text-xl font-black text-green-500">${savings}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image with Epic Parallax Effects */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
          <img
            src={images[0] || '/api/placeholder/400/300'}
            alt={offer.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Offer Type Badge */}
          <div className="absolute bottom-4 left-4 z-20">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-primary-600/30">
              {isGymOffer ? (
                <Building2 className="w-3 h-3 text-primary-500" />
              ) : (
                <User className="w-3 h-3 text-primary-500" />
              )}
              <span className="text-xs text-primary-400 font-bold uppercase tracking-wider">
                {isGymOffer ? 'Gym Deal' : 'Personal Training'}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Location */}
          <div className="flex items-center text-gray-400 mb-3 group-hover:text-gray-300 transition-colors">
            <MapPin className="h-4 w-4 mr-2 text-primary-500" />
            <span className="text-sm font-medium">
              {isGymOffer ? 'Elite Fitness Center' : 'Professional Trainer'} • New York, NY
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-black text-white mb-4 group-hover:text-gradient transition-all duration-300 leading-tight">
            {offer.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-6 line-clamp-3 group-hover:text-gray-400 transition-colors leading-relaxed">
            {offer.description}
          </p>

          {/* Specialties for PT offers */}
          {!isGymOffer && (
            <div className="flex flex-wrap gap-2 mb-6">
              {['Weight Training', 'Cardio'].map((specialty, i) => (
                <span
                  key={specialty}
                  className="text-xs px-3 py-1 rounded-full bg-primary-600/10 text-primary-400 border border-primary-600/30 font-bold uppercase tracking-wider"
                >
                  {specialty}
                </span>
              ))}
            </div>
          )}

          {/* Epic Price Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-gradient">
                    ${offer.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${Math.round(offer.price * 1.5)}
                  </span>
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  {offer.durationDescription}
                </div>
              </div>

              {savings > 0 && (
                <div className="text-right">
                  <div className="text-xl font-black text-green-500">
                    SAVE ${savings}
                  </div>
                  <div className="text-xs text-green-400 font-bold uppercase">
                    Limited Time
                  </div>
                </div>
              )}
            </div>

            {/* Epic CTA Button */}
            <Button className="btn-primary w-full shadow-neon group/btn relative overflow-hidden py-4">
              {/* Multiple animated background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-primary-600 to-red-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />

              <Tag className="w-5 h-5 mr-3 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 font-black text-lg">CLAIM THIS DEAL</span>
              <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" />

              {/* Epic shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transform translate-x-[-300%] group-hover/btn:translate-x-[300%] transition-transform duration-1200" />
            </Button>

            {/* Urgency Indicator */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/50 text-red-400">
                <Clock className="w-3 h-3 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Hurry! Only 2 days left
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Shine effect overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1200 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

