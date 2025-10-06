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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-dark-900/80 border-b border-dark-700 shadow-lg shadow-primary-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link href="/" className="flex items-center group">
              <div className="h-12 w-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Dumbbell className="text-white h-7 w-7 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="ml-3">
                <span className="text-2xl font-black text-white tracking-tight">VER</span>
                <span className="text-2xl font-black text-primary-500 tracking-tight">TEX</span>
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-primary-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border-2 border-dark-700 rounded-lg bg-dark-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all duration-300"
                  placeholder="Search gyms, trainers, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link href="/gyms">
              <Button variant="ghost" className="btn-ghost hover:text-primary-500">
                <Dumbbell className="w-4 h-4 mr-2" />
                Gyms
              </Button>
            </Link>
            <Link href="/trainers">
              <Button variant="ghost" className="btn-ghost hover:text-primary-500">
                <Zap className="w-4 h-4 mr-2" />
                Trainers
              </Button>
            </Link>
            <Link href="/offers">
              <Button variant="ghost" className="btn-ghost hover:text-primary-500">
                <Heart className="w-4 h-4 mr-2" />
                Offers
              </Button>
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-dark-700">
                <Link href={getDashboardLink()}>
                  <Button variant="ghost" className="btn-ghost hover:text-primary-500">
                    <User className="w-4 h-4 mr-2" />
                    {user?.firstName || 'Dashboard'}
                  </Button>
                </Link>
                <Button variant="ghost" className="btn-ghost hover:text-red-500" onClick={handleLogout}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-dark-700">
                <Link href="/auth/login">
                  <Button variant="ghost" className="btn-ghost hover:text-primary-500">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="btn-primary btn-sm">
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
              className="btn-ghost p-2"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-dark-700 bg-dark-900/95 backdrop-blur-xl animate-slide-down">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-primary-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border-2 border-dark-700 rounded-lg bg-dark-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 transition-all duration-300"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              <Link href="/gyms" className="block">
                <Button variant="ghost" className="w-full justify-start btn-ghost hover:text-primary-500">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Gyms
                </Button>
              </Link>
              <Link href="/trainers" className="block">
                <Button variant="ghost" className="w-full justify-start btn-ghost hover:text-primary-500">
                  <Zap className="w-4 h-4 mr-2" />
                  Trainers
                </Button>
              </Link>
              <Link href="/offers" className="block">
                <Button variant="ghost" className="w-full justify-start btn-ghost hover:text-primary-500">
                  <Heart className="w-4 h-4 mr-2" />
                  Offers
                </Button>
              </Link>
            </nav>

            {/* Mobile Auth Buttons */}
            {isAuthenticated ? (
              <div className="space-y-2 pt-4 border-t border-dark-700">
                <Link href={getDashboardLink()} className="block">
                  <Button variant="ghost" className="w-full justify-start btn-ghost hover:text-primary-500">
                    <User className="w-4 h-4 mr-2" />
                    {user?.firstName || 'Dashboard'}
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start btn-ghost hover:text-red-500"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="space-y-2 pt-4 border-t border-dark-700">
                <Link href="/auth/login" className="block">
                  <Button variant="outline" className="w-full btn-outline">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register" className="block">
                  <Button className="w-full btn-primary">
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
