'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Search, MapPin, Zap, TrendingUp, Award } from 'lucide-react';

export function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('gyms');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() || location.trim()) {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.set('q', searchQuery);
      if (location.trim()) params.set('location', location);
      params.set('type', searchType);
      router.push(`/search?${params.toString()}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary-800/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Red glow lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/20 border border-primary-600/50 text-primary-400 text-sm font-bold uppercase tracking-wider mb-8 animate-fade-in-down backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            Transform Your Body Today
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in-up">
            <span className="block text-white drop-shadow-2xl">UNLEASH YOUR</span>
            <span className="block text-gradient mt-2 drop-shadow-2xl animate-glow">
              INNER BEAST
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Connect with <span className="text-primary-500 font-bold">elite gyms</span> and <span className="text-primary-500 font-bold">world-class trainers</span>.
            Your transformation starts here.
          </p>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSearch} className="glass rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-primary-900/30 glow-red-hover">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    What are you looking for?
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-500" />
                    <Input
                      type="text"
                      placeholder="Search gyms, trainers, or offers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-500" />
                    <Input
                      type="text"
                      placeholder="City or ZIP"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Type
                  </label>
                  <Select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                  >
                    <option value="gyms">Gyms</option>
                    <option value="trainers">Trainers</option>
                    <option value="offers">Offers</option>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto btn-primary btn-lg group"
              >
                <Search className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Find Your Match
              </Button>
            </form>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="group relative">
              <div className="glass rounded-xl p-8 border border-primary-900/30 hover:border-primary-600/50 transition-all duration-300 glow-red-hover">
                <div className="absolute inset-0 bg-primary-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <TrendingUp className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-float" />
                <div className="text-4xl font-black text-white mb-2">500+</div>
                <div className="text-gray-400 font-medium uppercase tracking-wider">Partner Gyms</div>
              </div>
            </div>

            <div className="group relative">
              <div className="glass rounded-xl p-8 border border-primary-900/30 hover:border-primary-600/50 transition-all duration-300 glow-red-hover">
                <div className="absolute inset-0 bg-primary-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Award className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-float" style={{ animationDelay: '0.5s' }} />
                <div className="text-4xl font-black text-white mb-2">1,200+</div>
                <div className="text-gray-400 font-medium uppercase tracking-wider">Elite Trainers</div>
              </div>
            </div>

            <div className="group relative">
              <div className="glass rounded-xl p-8 border border-primary-900/30 hover:border-primary-600/50 transition-all duration-300 glow-red-hover">
                <div className="absolute inset-0 bg-primary-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Zap className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-float" style={{ animationDelay: '1s' }} />
                <div className="text-4xl font-black text-white mb-2">10,000+</div>
                <div className="text-gray-400 font-medium uppercase tracking-wider">Transformations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
    </section>
  );
}
