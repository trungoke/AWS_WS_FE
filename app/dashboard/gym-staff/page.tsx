'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Building2, 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  UserCheck,
  Clock,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Plus,
  Eye,
  CheckSquare,
  XCircle,
  Edit
} from 'lucide-react';

export default function GymStaffDashboard() {
  // Mock data - in real app, this would come from API
  const stats = {
    totalBookings: 45,
    pendingTrainerApprovals: 3,
    activeOffers: 8,
    monthlyRevenue: 8500,
    totalMembers: 120,
    upcomingSessions: 12,
  };

  const recentBookings = [
    {
      id: 1,
      client: 'John Smith',
      trainer: 'Sarah Johnson',
      time: 'Today, 6:00 PM',
      status: 'confirmed',
    },
    {
      id: 2,
      client: 'Jane Doe',
      trainer: 'Mike Chen',
      time: 'Tomorrow, 10:00 AM',
      status: 'confirmed',
    },
    {
      id: 3,
      client: 'Bob Wilson',
      trainer: 'Emma Rodriguez',
      time: 'Tomorrow, 2:00 PM',
      status: 'pending',
    },
  ];

  const pendingTrainers = [
    {
      id: 1,
      name: 'Alex Thompson',
      specialties: ['Weight Training', 'Cardio'],
      experience: 5,
      submittedAt: '2 days ago',
    },
    {
      id: 2,
      name: 'Lisa Park',
      specialties: ['Yoga', 'Pilates'],
      experience: 3,
      submittedAt: '1 week ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/8 rounded-full blur-[130px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 p-6 space-y-8">
        {/* Header */}
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-neon">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight">
                  GYM <span className="text-gradient">MANAGEMENT</span>
                </h1>
                <p className="text-gray-400 text-lg">Manage your gym, trainers, and offers</p>
              </div>
            </div>
            <Button className="btn-primary group">
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              <span className="font-bold">Add New Offer</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid with Epic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {/* Total Bookings */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-blue-600/30 hover:border-blue-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Bookings</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">{stats.totalBookings}</p>
              </div>
            </div>
          </div>

          {/* Pending Trainers */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-6 h-6 text-yellow-500 animate-pulse" />
                </div>
                <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 font-bold">PENDING</Badge>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Pending Trainers</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">{stats.pendingTrainerApprovals}</p>
              </div>
            </div>
          </div>

          {/* Active Offers */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-green-600/30 hover:border-green-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-green-500" />
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Active Offers</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">{stats.activeOffers}</p>
              </div>
            </div>
          </div>

          {/* Monthly Revenue */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-purple-600/30 hover:border-purple-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-purple-500" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Monthly Revenue</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">${stats.monthlyRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Bookings */}
          <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-black text-white">RECENT BOOKINGS</h2>
            </div>

            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="glass-card p-4 rounded-xl border border-primary-600/20 hover:border-primary-600/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-base font-bold text-white mb-1">{booking.client}</p>
                      <p className="text-sm text-gray-400">with {booking.trainer}</p>
                      <p className="text-xs text-gray-500 mt-1">{booking.time}</p>
                    </div>
                    <Badge variant={booking.status === 'confirmed' ? 'success' : 'warning'} className="font-bold">
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-outline w-full mt-6 group">
              <Eye className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
              <span className="font-bold">View All Bookings</span>
            </Button>
          </div>

          {/* Pending Trainer Approvals */}
          <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-yellow-500 animate-pulse" />
              </div>
              <h2 className="text-2xl font-black text-white">PENDING TRAINERS</h2>
            </div>

            <div className="space-y-4">
              {pendingTrainers.map((trainer) => (
                <div key={trainer.id} className="glass-card p-4 rounded-xl border border-yellow-600/30 hover:border-yellow-600/60 transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-base font-bold text-white mb-1">{trainer.name}</p>
                      <p className="text-sm text-gray-400">{trainer.specialties.join(', ')}</p>
                      <p className="text-xs text-gray-500 mt-1">{trainer.experience} years exp • {trainer.submittedAt}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-green-600/20 hover:bg-green-600/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <CheckSquare className="w-4 h-4 text-green-500" />
                      </button>
                      <button className="w-8 h-8 bg-red-600/20 hover:bg-red-600/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <XCircle className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-outline w-full mt-6 group">
              <Users className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
              <span className="font-bold">View All Trainers</span>
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary-500" />
            </div>
            <h2 className="text-2xl font-black text-white">QUICK ACTIONS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="glass-card p-6 rounded-xl border border-primary-600/30 hover:border-primary-600/60 transition-all duration-300 group hover:scale-105">
              <Plus className="w-8 h-8 text-primary-500 mb-3 group-hover:rotate-90 transition-transform duration-300" />
              <p className="text-lg font-black text-white mb-1">Create Offer</p>
              <p className="text-sm text-gray-400">Add new membership deals</p>
            </button>

            <button className="glass-card p-6 rounded-xl border border-primary-600/30 hover:border-primary-600/60 transition-all duration-300 group hover:scale-105">
              <Edit className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg font-black text-white mb-1">Edit Gym Info</p>
              <p className="text-sm text-gray-400">Update gym details</p>
            </button>

            <button className="glass-card p-6 rounded-xl border border-primary-600/30 hover:border-primary-600/60 transition-all duration-300 group hover:scale-105">
              <BarChart3 className="w-8 h-8 text-purple-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg font-black text-white mb-1">View Analytics</p>
              <p className="text-sm text-gray-400">Check performance stats</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
