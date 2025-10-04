'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Search, Dumbbell, MapPin, TrendingUp, Zap } from 'lucide-react';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-800/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-600/30 backdrop-blur-sm animate-fade-in">
            <Zap className="w-4 h-4 text-primary-500 animate-pulse" />
            <span className="text-sm font-bold text-primary-400 uppercase tracking-wider">
              #1 Fitness Platform
            </span>
          </div>

          {/* Main title */}
          <h1 className="hero-title animate-slide-up">
            TRANSFORM YOUR
            <br />
            <span className="text-glow animate-glow">BODY & MIND</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover premium gyms and elite personal trainers near you.
            <br />
            Start your fitness journey today with <span className="text-primary-500 font-bold">Easy Body</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-4xl font-black text-primary-500 mb-1">1000+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Gyms</div>
            </div>
            <div className="w-px h-16 bg-dark-700" />
            <div className="text-center">
              <div className="text-4xl font-black text-primary-500 mb-1">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Trainers</div>
            </div>
            <div className="w-px h-16 bg-dark-700" />
            <div className="text-center">
              <div className="text-4xl font-black text-primary-500 mb-1">10K+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Members</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-3 shadow-glow-lg">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter your location..."
                    className="w-full h-14 pl-12 pr-4 bg-dark-800 border-2 border-dark-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-600 transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="btn-primary btn-lg group">
                  <Search className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Search Now
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link href="/gyms">
              <Button className="btn-primary btn-lg group">
                <Dumbbell className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Find Gyms
              </Button>
            </Link>
            <Link href="/trainers">
              <Button className="btn-outline btn-lg group">
                <TrendingUp className="w-5 h-5 mr-2 group-hover:translate-y-[-4px] transition-transform duration-300" />
                Find Trainers
              </Button>
            </Link>
          </div>

          {/* Floating elements */}
          <div className="absolute top-32 left-10 animate-float hidden lg:block">
            <div className="w-20 h-20 rounded-full bg-primary-600/20 border-4 border-primary-600/40 flex items-center justify-center backdrop-blur-sm">
              <Dumbbell className="w-10 h-10 text-primary-500" />
            </div>
          </div>
          <div className="absolute bottom-32 right-10 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
            <div className="w-24 h-24 rounded-full bg-primary-600/20 border-4 border-primary-600/40 flex items-center justify-center backdrop-blur-sm">
              <Zap className="w-12 h-12 text-primary-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </div>
  );
}
