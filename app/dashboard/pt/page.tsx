'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  User, 
  Calendar, 
  FileText, 
  Users, 
  Clock, 
  CheckCircle,
  DollarSign,
  TrendingUp,
  Star,
  MapPin
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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Personal Trainer Dashboard</h1>
        <p className="text-gray-600">Manage your clients, sessions, and business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Clients</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.totalClients}</dd>
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
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Upcoming Sessions</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.upcomingSessions}</dd>
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
                  <dt className="text-sm font-medium text-gray-500 truncate">Monthly Earnings</dt>
                  <dd className="text-lg font-medium text-gray-900">${stats.monthlyEarnings.toLocaleString()}</dd>
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
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Rating</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.rating}/5</dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{session.client}</p>
                    <p className="text-sm text-gray-500">{session.type} • {session.duration} min</p>
                    <p className="text-xs text-gray-400">{session.time}</p>
                  </div>
                  <Badge variant={session.status === 'confirmed' ? 'success' : 'warning'}>
                    {session.status}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Sessions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Clients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Recent Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentClients.map((client) => (
                <div key={client.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{client.name}</p>
                    <p className="text-sm text-gray-500">{client.totalSessions} sessions completed</p>
                    <p className="text-xs text-gray-400">Last: {client.lastSession}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Next: {client.nextSession}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Clients
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            Profile Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">{stats.completedSessions}</div>
              <div className="text-sm text-gray-500">Sessions Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">{stats.totalReviews}</div>
              <div className="text-sm text-gray-500">Client Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-sm text-gray-500">Active Offers</div>
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
              <User className="h-6 w-6 mb-2" />
              <span>Update Profile</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Calendar className="h-6 w-6 mb-2" />
              <span>Set Availability</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <FileText className="h-6 w-6 mb-2" />
              <span>Create Offer</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Users className="h-6 w-6 mb-2" />
              <span>Manage Clients</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
