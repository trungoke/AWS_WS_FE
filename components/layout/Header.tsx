'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useUIStore } from '@/store/uiStore';
import { Button } from '@/components/ui/Button';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  LogOut, 
  Settings, 
  Heart,
  MapPin,
  Dumbbell,
  Zap
} from 'lucide-react';

export function Header() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { mobileMenuOpen, toggleMobileMenu } = useUIStore();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const getDashboardLink = () => {
    if (!user) return '/dashboard';
    switch (user.role) {
      case 'ADMIN':
        return '/dashboard/admin';
      case 'GYM_STAFF':
        return '/dashboard/gym-staff';
      case 'PT_USER':
        return '/dashboard/pt';
      default:
        return '/dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-50 glass backdrop-blur-2xl border-b border-primary-600/20 shadow-3d">
      {/* Animated border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with 3D Effect */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link href="/" className="flex items-center group perspective-1000">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative h-14 w-14 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-neon group-hover:shadow-neon-lg transition-all duration-500 transform-3d group-hover:scale-110 group-hover:rotate-6">
                  <Dumbbell className="text-white h-8 w-8 group-hover:rotate-180 transition-transform duration-500" />
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-black text-white tracking-tighter">VER</span>
                  <span className="text-3xl font-black text-gradient tracking-tighter">TEX</span>
                </div>
                <div className="text-xs text-gray-400 font-bold tracking-wider uppercase">Fitness Platform</div>
              </div>
            </Link>
          </div>

          {/* Premium Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl opacity-0 group-hover:opacity-50 blur transition duration-300" />
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-500 z-10" />
                  <input
                    type="text"
                    className="block w-full h-12 pl-12 pr-4 glass-card border border-dark-700/50 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-600/50 focus:shadow-glow transition-all duration-300"
                    placeholder="Search gyms, trainers, locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link href="/gyms">
              <Button variant="ghost" className="btn-ghost hover:bg-primary-600/10 group">
                <Dumbbell className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                <span className="group-hover:text-primary-400 transition-colors">Gyms</span>
              </Button>
            </Link>
            <Link href="/trainers">
              <Button variant="ghost" className="btn-ghost hover:bg-primary-600/10 group">
                <Zap className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-primary-400 transition-colors">Trainers</span>
              </Button>
            </Link>
            <Link href="/offers">
              <Button variant="ghost" className="btn-ghost hover:bg-primary-600/10 group">
                <Heart className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-primary-400 transition-colors">Offers</span>
              </Button>
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-dark-700/50">
                <Link href={getDashboardLink()}>
                  <Button variant="ghost" className="btn-ghost hover:bg-primary-600/10">
                    <User className="w-4 h-4 mr-2" />
                    {user?.firstName || 'Dashboard'}
                  </Button>
                </Link>
                <Button variant="ghost" className="btn-ghost hover:bg-red-500/10 hover:text-red-500" onClick={handleLogout}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-dark-700/50">
                <Link href="/auth/login">
                  <Button variant="ghost" className="btn-ghost">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="btn-primary btn-sm shadow-glow">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="btn-ghost p-2 hover:bg-primary-600/10"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary-500" />
              ) : (
                <Menu className="h-6 w-6 text-primary-500" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600/30 to-transparent" />

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary-600/20 glass-card animate-slide-down">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch}>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-500 z-10" />
                <input
                  type="text"
                  className="block w-full h-12 pl-12 pr-4 glass-card border border-dark-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-600/50 focus:shadow-glow transition-all duration-300"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              <Link href="/gyms" className="block">
                <Button variant="ghost" className="w-full justify-start btn-ghost hover:bg-primary-600/10">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Gyms
                </Button>
              </Link>
              <Link href="/trainers" className="block">
                <Button variant="ghost" className="w-full justify-start btn-ghost hover:bg-primary-600/10">
                  <Zap className="w-4 h-4 mr-2" />
                  Trainers
                </Button>
              </Link>
              <Link href="/offers" className="block">
                <Button variant="ghost" className="w-full justify-start btn-ghost hover:bg-primary-600/10">
                  <Heart className="w-4 h-4 mr-2" />
                  Offers
                </Button>
              </Link>
            </nav>

            {/* Mobile Auth Buttons */}
            {isAuthenticated ? (
              <div className="space-y-2 pt-4 border-t border-dark-700/50">
                <Link href={getDashboardLink()} className="block">
                  <Button variant="ghost" className="w-full justify-start btn-ghost hover:bg-primary-600/10">
                    <User className="w-4 h-4 mr-2" />
                    {user?.firstName || 'Dashboard'}
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start btn-ghost hover:bg-red-500/10 hover:text-red-500"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="space-y-2 pt-4 border-t border-dark-700/50">
                <Link href="/auth/login" className="block">
                  <Button variant="outline" className="w-full btn-outline">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register" className="block">
                  <Button className="w-full btn-primary shadow-glow">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

