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
  Activity,
  User,
  Mail,
  Phone,
  Settings,
  Edit,
  Trophy
} from 'lucide-react';

export default function ProfilePage() {
  const { user, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // Wait for auth to initialize
    if (isLoading) return;

    if (!user) {
      router.push('/auth/login');
      return;
    }

    // Redirect non-client users to their respective dashboards
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
  }, [user, isLoading, router]);

  // Show loading while auth is initializing
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <div className="text-white text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Redirecting...</div>
      </div>
    );
  }

  // Client user profile
  if (user.role === 'CLIENT_USER') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[130px] animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-7xl mx-auto p-6 space-y-8">
          {/* Header */}
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center shadow-neon">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-black text-white tracking-tight">
                    <span className="text-gradient">{user.firstName?.toUpperCase()}</span> {user.lastName?.toUpperCase()}
                  </h1>
                  <p className="text-gray-400 text-lg mt-1">Your Fitness Profile</p>
                </div>
              </div>
              <Button className="btn-primary shadow-glow">
                <Edit className="w-5 h-5 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Personal Information */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="glass-card rounded-2xl p-6 border border-primary-600/30 shadow-3d">
                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary-500" />
                  PERSONAL INFO
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-dark-800/50 rounded-xl">
                    <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Email</p>
                      <p className="text-white font-semibold">{user.email}</p>
                    </div>
                  </div>
                  {user.phoneNumber && (
                    <div className="flex items-start gap-3 p-4 bg-dark-800/50 rounded-xl">
                      <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-white font-semibold">{user.phoneNumber}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3 p-4 bg-dark-800/50 rounded-xl">
                    <User className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Role</p>
                      <Badge className="bg-primary-600/20 text-primary-400 border-primary-600/30 font-bold">
                        CLIENT USER
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {/* Active Bookings */}
                <div className="group perspective-1000">
                  <div className="glass-card rounded-2xl p-6 border border-primary-600/30 hover:border-primary-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-6 h-6 text-primary-500 animate-pulse" />
                      </div>
                      <Badge className="bg-primary-600/20 text-primary-400 border-primary-600/30 font-bold text-xs">ACTIVE</Badge>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Bookings</p>
                      <p className="text-3xl font-black text-white group-hover:text-gradient transition-all duration-300">3</p>
                    </div>
                  </div>
                </div>

                {/* Completed Sessions */}
                <div className="group perspective-1000">
                  <div className="glass-card rounded-2xl p-6 border border-blue-600/30 hover:border-blue-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Activity className="w-6 h-6 text-blue-500" />
                      </div>
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 font-bold text-xs">TOTAL</Badge>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Sessions</p>
                      <p className="text-3xl font-black text-white">24</p>
                    </div>
                  </div>
                </div>

                {/* Favorite Gyms */}
                <div className="group perspective-1000">
                  <div className="glass-card rounded-2xl p-6 border border-purple-600/30 hover:border-purple-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-6 h-6 text-purple-500" />
                      </div>
                      <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 font-bold text-xs">SAVED</Badge>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Favorites</p>
                      <p className="text-3xl font-black text-white">5</p>
                    </div>
                  </div>
                </div>

                {/* Reviews Given */}
                <div className="group perspective-1000">
                  <div className="glass-card rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-6 h-6 text-yellow-500" />
                      </div>
                      <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 font-bold text-xs">REVIEWS</Badge>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Reviews</p>
                      <p className="text-3xl font-black text-white">8</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-card rounded-2xl p-6 border border-primary-600/30 shadow-3d animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-primary-500" />
                  RECENT ACTIVITY
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Calendar, title: 'Booked session at Gold\'s Gym', time: '2 hours ago', color: 'primary' },
                    { icon: Star, title: 'Left a review for PT John Doe', time: '1 day ago', color: 'yellow' },
                    { icon: Heart, title: 'Added Fitness World to favorites', time: '3 days ago', color: 'purple' },
                    { icon: Trophy, title: 'Completed 10 sessions milestone', time: '5 days ago', color: 'green' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl hover:bg-dark-800/80 transition-all duration-300 group cursor-pointer">
                      <div className={`w-10 h-10 bg-${activity.color}-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <activity.icon className={`w-5 h-5 text-${activity.color}-500`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold group-hover:text-gradient transition-all duration-300">{activity.title}</p>
                        <p className="text-sm text-gray-400 font-medium">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card rounded-2xl p-6 border border-primary-600/30 shadow-3d animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary-500" />
              QUICK ACTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                className="btn-primary shadow-glow justify-start h-auto py-4"
                onClick={() => router.push('/gyms')}
              >
                <Dumbbell className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-black text-lg">Find Gyms</div>
                  <div className="text-xs opacity-80">Explore nearby gyms</div>
                </div>
              </Button>
              <Button
                className="btn-outline shadow-glow justify-start h-auto py-4"
                onClick={() => router.push('/trainers')}
              >
                <Award className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-black text-lg">Find Trainers</div>
                  <div className="text-xs opacity-80">Get personalized training</div>
                </div>
              </Button>
              <Button
                className="btn-outline shadow-glow justify-start h-auto py-4"
                onClick={() => router.push('/offers')}
              >
                <TrendingUp className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-black text-lg">View Offers</div>
                  <div className="text-xs opacity-80">Check latest deals</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
