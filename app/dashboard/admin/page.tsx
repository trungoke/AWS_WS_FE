'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Shield, 
  Users, 
  Building2, 
  FileText, 
  BarChart3, 
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  DollarSign,
  Activity,
  Eye,
  XCircle,
  CheckSquare
} from 'lucide-react';

export default function AdminDashboard() {
  // Mock data - in real app, this would come from API
  const stats = {
    pendingApprovals: 12,
    totalUsers: 1250,
    totalGyms: 45,
    totalTrainers: 180,
    moderationFlags: 8,
    monthlyRevenue: 12500,
    activeSubscriptions: 890,
  };

  const recentActivity = [
    {
      id: 1,
      type: 'approval',
      message: 'New gym "FitZone" waiting for approval',
      time: '2 hours ago',
      status: 'pending',
    },
    {
      id: 2,
      type: 'moderation',
      message: 'Content flagged for review',
      time: '4 hours ago',
      status: 'pending',
    },
    {
      id: 3,
      type: 'approval',
      message: 'Personal trainer John Doe approved',
      time: '6 hours ago',
      status: 'completed',
    },
    {
      id: 4,
      type: 'user',
      message: 'New user registration: jane@example.com',
      time: '1 day ago',
      status: 'completed',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[130px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 p-6 space-y-8">
        {/* Header */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-neon">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white tracking-tight">
                ADMIN <span className="text-gradient">CONTROL CENTER</span>
              </h1>
              <p className="text-gray-400 text-lg">Manage the platform and oversee all operations</p>
            </div>
          </div>
        </div>

        {/* Stats Grid with Epic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {/* Pending Approvals */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-red-600/30 hover:border-red-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-red-500 animate-pulse" />
                </div>
                <Badge className="bg-red-600/20 text-red-400 border-red-600/30 font-bold">URGENT</Badge>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Pending Approvals</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">{stats.pendingApprovals}</p>
              </div>
            </div>
          </div>

          {/* Total Users */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-blue-600/30 hover:border-blue-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Users</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">{stats.totalUsers.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Active Gyms */}
          <div className="group perspective-1000">
            <div className="glass-card rounded-2xl p-6 border border-green-600/30 hover:border-green-600/60 transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-3d hover:shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-6 h-6 text-green-500" />
                </div>
                <Activity className="w-5 h-5 text-green-500 animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Active Gyms</p>
                <p className="text-4xl font-black text-white group-hover:text-gradient transition-all duration-300">{stats.totalGyms}</p>
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
          {/* Pending Approvals Section */}
          <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-black text-white">PENDING APPROVALS</h2>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-4 rounded-xl border border-yellow-600/30 hover:border-yellow-600/60 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-base font-bold text-white mb-1">FitZone Gym</p>
                    <p className="text-sm text-gray-400">Waiting for gym approval</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
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

              <div className="glass-card p-4 rounded-xl border border-yellow-600/30 hover:border-yellow-600/60 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-base font-bold text-white mb-1">Mike Chen - Personal Trainer</p>
                    <p className="text-sm text-gray-400">Waiting for trainer verification</p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
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

              <div className="glass-card p-4 rounded-xl border border-yellow-600/30 hover:border-yellow-600/60 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-base font-bold text-white mb-1">PowerHouse Fitness Offer</p>
                    <p className="text-sm text-gray-400">New offer needs approval</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
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
            </div>

            <Button className="btn-outline w-full mt-6 group">
              <Eye className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
              <span className="font-bold">View All Pending Approvals</span>
            </Button>
          </div>

          {/* Moderation Flags Section */}
          <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
              </div>
              <h2 className="text-2xl font-black text-white">MODERATION FLAGS</h2>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-4 rounded-xl border border-red-600/30 hover:border-red-600/60 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-base font-bold text-white mb-1">Inappropriate Review Content</p>
                    <p className="text-sm text-gray-400">Review by user @john_doe flagged</p>
                    <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                  </div>
                  <button className="btn-primary px-4 py-2 text-sm font-bold group-hover:scale-105 transition-transform">
                    Review
                  </button>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-red-600/30 hover:border-red-600/60 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-base font-bold text-white mb-1">Suspicious Account Activity</p>
                    <p className="text-sm text-gray-400">Multiple reports on trainer profile</p>
                    <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
                  </div>
                  <button className="btn-primary px-4 py-2 text-sm font-bold group-hover:scale-105 transition-transform">
                    Review
                  </button>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-red-600/30 hover:border-red-600/60 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-base font-bold text-white mb-1">Spam Detection Alert</p>
                    <p className="text-sm text-gray-400">Gym posting excessive offers</p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                  </div>
                  <button className="btn-primary px-4 py-2 text-sm font-bold group-hover:scale-105 transition-transform">
                    Review
                  </button>
                </div>
              </div>
            </div>

            <Button className="btn-outline w-full mt-6 group">
              <AlertTriangle className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
              <span className="font-bold">View All Flags</span>
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-3xl p-8 border border-primary-600/30 shadow-3d-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-500" />
            </div>
            <h2 className="text-2xl font-black text-white">RECENT ACTIVITY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="glass-card p-4 rounded-xl border border-primary-600/20 hover:border-primary-600/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={activity.status === 'completed' ? 'success' : 'warning'} className="font-bold text-xs">
                    {activity.status}
                  </Badge>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{activity.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
