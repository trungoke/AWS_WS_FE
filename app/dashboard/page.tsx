'use client';

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Heart,
  Calendar,
  TrendingUp,
  Star,
  MapPin,
  Clock,
  Dumbbell,
  Award,
  Target,
  Activity
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
      return;
    }

    // Redirect to role-specific dashboard
    switch (user.role) {
      case 'ADMIN':
        router.push('/dashboard/admin');
        break;
      case 'GYM_STAFF':
        router.push('/dashboard/gym-staff');
        break;
      case 'PT_USER':
        router.push('/dashboard/pt');
        break;
      case 'CLIENT_USER':
      default:
        // Stay on this page for client users
        break;
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Client user dashboard
  if (user.role === 'CLIENT_USER') {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden min-h-[calc(100vh-4rem)]">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[130px] animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 p-6 space-y-8">
          {/* Header */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-neon">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight">
                  WELCOME BACK, <span className="text-gradient">{user.firstName?.toUpperCase()}</span>
                </h1>
                <p className="text-gray-400 text-lg">Here's what's happening with your fitness journey</p>
              </div>
            </div>
          </div>

          {/* Stats Grid with Epic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Active Bookings */}
            <div className="group perspective-1000">
              <div className="glass-card rounded-2xl p-6 border border-primary-600/30 hover:border-primary-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-primary-500 animate-pulse" />
                  </div>
                  <Badge className="bg-primary-600/20 text-primary-400 border-primary-600/30 font-bold">ACTIVE</Badge>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Active Bookings</p>
                  <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">3</p>
                </div>
              </div>
            </div>

            {/* Completed Sessions */}
            <div className="group perspective-1000">
              <div className="glass-card rounded-2xl p-6 border border-green-600/30 hover:border-green-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-green-500" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Completed Sessions</p>
                  <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">12</p>
                </div>
              </div>
            </div>

            {/* Favorites */}
            <div className="group perspective-1000">
              <div className="glass-card rounded-2xl p-6 border border-red-600/30 hover:border-red-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                  </div>
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Favorites</p>
                  <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">5</p>
                </div>
              </div>
            </div>

            {/* Total Hours */}
            <div className="group perspective-1000">
              <div className="glass-card rounded-2xl p-6 border border-purple-600/30 hover:border-purple-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-purple-500" />
                  </div>
                  <Activity className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Hours</p>
                  <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">24</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-500" />
              </div>
              <h2 className="text-2xl font-black text-white">QUICK ACTIONS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                onClick={() => router.push('/gyms')}
                className="glass-card p-6 rounded-xl border border-primary-600/30 hover:border-primary-600/60 transition-all duration-300 group hover:scale-105"
              >
                <MapPin className="w-8 h-8 text-primary-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-lg font-black text-white mb-1">Find Gyms</p>
                <p className="text-sm text-gray-400">Discover gyms near you</p>
              </button>

              <button
                onClick={() => router.push('/trainers')}
                className="glass-card p-6 rounded-xl border border-primary-600/30 hover:border-primary-600/60 transition-all duration-300 group hover:scale-105"
              >
                <Award className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-lg font-black text-white mb-1">Find Trainers</p>
                <p className="text-sm text-gray-400">Connect with expert trainers</p>
              </button>

              <button
                onClick={() => router.push('/offers')}
                className="glass-card p-6 rounded-xl border border-primary-600/30 hover:border-primary-600/60 transition-all duration-300 group hover:scale-105"
              >
                <Star className="w-8 h-8 text-yellow-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-lg font-black text-white mb-1">Browse Offers</p>
                <p className="text-sm text-gray-400">Special deals & packages</p>
              </button>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-green-500" />
                </div>
                <h2 className="text-2xl font-black text-white">UPCOMING SESSIONS</h2>
              </div>
              <Button className="btn-primary">View All</Button>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-6 rounded-xl border border-primary-600/20 hover:border-primary-600/50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white mb-1">Personal Training Session</p>
                      <p className="text-sm text-gray-400">with Sarah Johnson</p>
                      <p className="text-xs text-gray-500 mt-1">Tomorrow, 6:00 PM • 60 minutes</p>
                    </div>
                  </div>
                  <Badge variant="success" className="font-bold">CONFIRMED</Badge>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl border border-primary-600/20 hover:border-primary-600/50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                      <Activity className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white mb-1">Yoga Class</p>
                      <p className="text-sm text-gray-400">at Zen Wellness Center</p>
                      <p className="text-xs text-gray-500 mt-1">Friday, 10:00 AM • 45 minutes</p>
                    </div>
                  </div>
                  <Badge variant="success" className="font-bold">CONFIRMED</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading state while redirecting
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white text-xl font-bold">Redirecting...</p>
      </div>
    </div>
  );
}
