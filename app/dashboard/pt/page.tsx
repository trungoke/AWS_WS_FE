'use client';

import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  Star,
  Plus,
  Eye,
  Activity,
  Award,
  CheckCircle
} from 'lucide-react';

export default function PTDashboard() {
  // Mock data - in real app, this would come from API
  const stats = {
    totalClients: 15,
    upcomingSessions: 8,
    completedSessions: 45,
    monthlyEarnings: 3200,
    rating: 4.9,
    totalReviews: 23,
  };

  const upcomingSessions = [
    {
      id: 1,
      client: 'John Smith',
      time: 'Today, 6:00 PM',
      duration: 60,
      type: 'Personal Training',
      status: 'confirmed',
    },
    {
      id: 2,
      client: 'Jane Doe',
      time: 'Tomorrow, 10:00 AM',
      duration: 45,
      type: 'Yoga Session',
      status: 'confirmed',
    },
    {
      id: 3,
      client: 'Bob Wilson',
      time: 'Tomorrow, 2:00 PM',
      duration: 60,
      type: 'Strength Training',
      status: 'pending',
    },
  ];

  const recentClients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastSession: '2 days ago',
      totalSessions: 12,
      nextSession: 'Tomorrow',
    },
    {
      id: 2,
      name: 'Mike Chen',
      lastSession: '1 week ago',
      totalSessions: 8,
      nextSession: 'Next week',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      lastSession: '3 days ago',
      totalSessions: 15,
      nextSession: 'Friday',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[130px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 p-6 space-y-8">
        {/* Header */}
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-neon">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight">
                  TRAINER <span className="text-gradient">DASHBOARD</span>
                </h1>
                <p className="text-gray-400 text-lg">Manage your clients, sessions, and business</p>
              </div>
            </div>
            <Button className="btn-primary group">
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              <span className="font-bold">New Session</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid with Epic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {/* Total Clients */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-blue-600/30 hover:border-blue-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Clients</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">{stats.totalClients}</p>
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-green-600/30 hover:border-green-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-green-500 animate-pulse" />
                </div>
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30 font-bold">ACTIVE</Badge>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Upcoming Sessions</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">{stats.upcomingSessions}</p>
              </div>
            </div>
          </div>

          {/* Monthly Earnings */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-purple-600/30 hover:border-purple-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-purple-500" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Monthly Earnings</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">${stats.monthlyEarnings.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Rating</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">{stats.rating}/5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Sessions */}
          <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl font-black text-white">UPCOMING SESSIONS</h2>
            </div>

            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="glass-card p-4 rounded-xl border border-primary-600/20 hover:border-primary-600/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-base font-bold text-white mb-1">{session.client}</p>
                      <p className="text-sm text-gray-400">{session.type} • {session.duration} min</p>
                      <p className="text-xs text-gray-500 mt-1">{session.time}</p>
                    </div>
                    <Badge variant={session.status === 'confirmed' ? 'success' : 'warning'} className="font-bold">
                      {session.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-outline w-full mt-6 group">
              <Eye className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
              <span className="font-bold">View All Sessions</span>
            </Button>
          </div>

          {/* Recent Clients */}
          <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-black text-white">RECENT CLIENTS</h2>
            </div>

            <div className="space-y-4">
              {recentClients.map((client) => (
                <div key={client.id} className="glass-card p-4 rounded-xl border border-primary-600/20 hover:border-primary-600/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-base font-bold text-white mb-1">{client.name}</p>
                      <p className="text-sm text-gray-400">{client.totalSessions} sessions completed</p>
                      <p className="text-xs text-gray-500 mt-1">Last: {client.lastSession} • Next: {client.nextSession}</p>
                    </div>
                    <button className="btn-primary px-4 py-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-outline w-full mt-6 group">
              <Users className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
              <span className="font-bold">View All Clients</span>
            </Button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-500" />
            </div>
            <h2 className="text-2xl font-black text-white">PERFORMANCE OVERVIEW</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl border border-primary-600/30 hover:border-primary-600/60 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Completed</p>
                  <p className="text-2xl font-black text-white group-hover:text-gradient transition-all">{stats.completedSessions}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">Sessions this month</p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-primary-600/30 hover:border-primary-600/60 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Reviews</p>
                  <p className="text-2xl font-black text-white group-hover:text-gradient transition-all">{stats.totalReviews}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">Total reviews received</p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-primary-600/30 hover:border-primary-600/60 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Active Clients</p>
                  <p className="text-2xl font-black text-white group-hover:text-gradient transition-all">{stats.totalClients}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">Currently training with you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
