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
  Calendar,
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
    <header className="sticky top-0 z-50 glass border-b border-primary-900/30 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-950 via-secondary-900 to-secondary-950 opacity-95"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link href="/" className="flex items-center group">
              <div className="h-12 w-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center shadow-lg shadow-primary-900/50 group-hover:shadow-xl group-hover:shadow-primary-900/70 transition-all duration-300 group-hover:scale-110">
                <Dumbbell className="text-white h-7 w-7 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="ml-3">
                <span className="text-2xl font-black text-white tracking-tight">EASY</span>
                <span className="text-2xl font-black text-primary-500 tracking-tight">BODY</span>
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
                  placeholder="Search gyms, trainers, offers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border-2 border-secondary-800 rounded-lg bg-secondary-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-300"
                />
              </div>
            </form>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/gyms"
              className="group flex items-center px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-secondary-800 transition-all duration-300 font-semibold"
            >
              <MapPin className="h-4 w-4 mr-2 text-primary-500 group-hover:scale-110 transition-transform" />
              Gyms
            </Link>
            <Link
              href="/trainers"
              className="group flex items-center px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-secondary-800 transition-all duration-300 font-semibold"
            >
              <Zap className="h-4 w-4 mr-2 text-primary-500 group-hover:scale-110 transition-transform" />
              Trainers
            </Link>
            <Link
              href="/offers"
              className="group flex items-center px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-secondary-800 transition-all duration-300 font-semibold"
            >
              <Calendar className="h-4 w-4 mr-2 text-primary-500 group-hover:scale-110 transition-transform" />
              Offers
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-2 ml-4">
                <Link
                  href="/favorites"
                  className="p-3 rounded-lg text-gray-300 hover:text-primary-500 hover:bg-secondary-800 transition-all duration-300"
                  title="Favorites"
                >
                  <Heart className="h-5 w-5" />
                </Link>
                <Link
                  href={getDashboardLink()}
                  className="p-3 rounded-lg text-gray-300 hover:text-primary-500 hover:bg-secondary-800 transition-all duration-300"
                  title="Dashboard"
                >
                  <Settings className="h-5 w-5" />
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary-800 hover:bg-secondary-700 transition-all duration-300">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-white">
                        {user?.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 glass rounded-lg shadow-xl border border-primary-900/30 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link
                      href="/profile"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary-800 transition-colors font-semibold"
                    >
                      Profile
                    </Link>
                    <Link
                      href={getDashboardLink()}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-secondary-800 transition-colors font-semibold"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 text-sm text-primary-500 hover:text-primary-400 hover:bg-secondary-800 transition-colors font-semibold"
                    >
                      <LogOut className="inline h-4 w-4 mr-2" />
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-4">
                <Link href="/auth/login">
                  <Button variant="ghost" size="md" className="font-bold">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button variant="primary" size="md" className="font-bold">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-secondary-800 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Top glow line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent"></div>
    </header>
  );
}
