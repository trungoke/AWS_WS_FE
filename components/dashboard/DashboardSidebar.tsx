'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/lib/utils';
import {
  Home,
  Users,
  Building2,
  Calendar,
  Settings,
  BarChart3,
  Shield,
  UserCheck,
  FileText,
  Bell,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

const navigation = {
  CLIENT_USER: [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'My Bookings', href: '/dashboard/bookings', icon: Calendar },
    { name: 'Favorites', href: '/dashboard/favorites', icon: Users },
    { name: 'Profile', href: '/dashboard/profile', icon: Settings },
  ],
  PT_USER: [
    { name: 'Dashboard', href: '/dashboard/pt', icon: Home },
    { name: 'My Profile', href: '/dashboard/pt/profile', icon: UserCheck },
    { name: 'Availability', href: '/dashboard/pt/availability', icon: Calendar },
    { name: 'My Offers', href: '/dashboard/pt/offers', icon: FileText },
    { name: 'Bookings', href: '/dashboard/pt/bookings', icon: Calendar },
    { name: 'Clients', href: '/dashboard/pt/clients', icon: Users },
    { name: 'Settings', href: '/dashboard/pt/settings', icon: Settings },
  ],
  GYM_STAFF: [
    { name: 'Dashboard', href: '/dashboard/gym-staff', icon: Home },
    { name: 'Gym Management', href: '/dashboard/gym-staff/gym', icon: Building2 },
    { name: 'Trainer Approvals', href: '/dashboard/gym-staff/trainers', icon: UserCheck },
    { name: 'Offers', href: '/dashboard/gym-staff/offers', icon: FileText },
    { name: 'Bookings', href: '/dashboard/gym-staff/bookings', icon: Calendar },
    { name: 'Analytics', href: '/dashboard/gym-staff/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/gym-staff/settings', icon: Settings },
  ],
  ADMIN: [
    { name: 'Dashboard', href: '/dashboard/admin', icon: Home },
    { name: 'Pending Approvals', href: '/dashboard/admin/approvals', icon: Shield },
    { name: 'Moderation', href: '/dashboard/admin/moderation', icon: FileText },
    { name: 'Users', href: '/dashboard/admin/users', icon: Users },
    { name: 'Gyms', href: '/dashboard/admin/gyms', icon: Building2 },
    { name: 'Analytics', href: '/dashboard/admin/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
  ],
};

export function DashboardSidebar() {
  const { user, logout } = useAuthStore();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const userNavigation = user ? navigation[user.role] : [];

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Vertex</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {userNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                      isActive
                        ? 'bg-primary-100 text-primary-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    )}
                  >
                    <item.icon
                      className={cn(
                        'mr-4 h-6 w-6',
                        isActive ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                      )}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-sm font-medium text-primary-600">
                  {user?.email?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-base font-medium text-gray-700">{user?.email}</p>
                <p className="text-sm font-medium text-gray-500 capitalize">
                  {user?.role?.toLowerCase().replace('_', ' ')}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="ml-auto p-2 text-gray-400 hover:text-gray-600"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EB</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Easy Body</span>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {userNavigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                        isActive
                          ? 'bg-primary-100 text-primary-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      )}
                    >
                      <item.icon
                        className={cn(
                          'mr-3 h-5 w-5',
                          isActive ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                        )}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex items-center w-full">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-600">
                    {user?.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-700 truncate">{user?.email}</p>
                  <p className="text-xs font-medium text-gray-500 capitalize">
                    {user?.role?.toLowerCase().replace('_', ' ')}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-2 p-2 text-gray-400 hover:text-gray-600"
                  title="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
