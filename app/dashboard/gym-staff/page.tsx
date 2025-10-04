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
  DollarSign
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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gym Management Dashboard</h1>
        <p className="text-gray-600">Manage your gym, trainers, and offers.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Bookings</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.totalBookings}</dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center">
                  <UserCheck className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Pending Trainers</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.pendingTrainerApprovals}</dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Offers</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.activeOffers}</dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Monthly Revenue</dt>
                  <dd className="text-lg font-medium text-gray-900">${stats.monthlyRevenue.toLocaleString()}</dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Recent Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{booking.client}</p>
                    <p className="text-sm text-gray-500">with {booking.trainer}</p>
                    <p className="text-xs text-gray-400">{booking.time}</p>
                  </div>
                  <Badge variant={booking.status === 'confirmed' ? 'success' : 'warning'}>
                    {booking.status}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Bookings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pending Trainer Approvals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCheck className="h-5 w-5 mr-2" />
              Pending Trainer Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingTrainers.map((trainer) => (
                <div key={trainer.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{trainer.name}</p>
                    <p className="text-sm text-gray-500">{trainer.specialties.join(', ')}</p>
                    <p className="text-xs text-gray-400">{trainer.experience} years experience • {trainer.submittedAt}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm">Approve</Button>
                    <Button size="sm" variant="outline">Review</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Applications
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gym Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building2 className="h-5 w-5 mr-2" />
            Gym Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">{stats.totalMembers}</div>
              <div className="text-sm text-gray-500">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">{stats.upcomingSessions}</div>
              <div className="text-sm text-gray-500">Upcoming Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-20 flex flex-col items-center justify-center">
              <Building2 className="h-6 w-6 mb-2" />
              <span>Manage Gym</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <UserCheck className="h-6 w-6 mb-2" />
              <span>Approve Trainers</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <FileText className="h-6 w-6 mb-2" />
              <span>Create Offer</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <BarChart3 className="h-6 w-6 mb-2" />
              <span>View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
