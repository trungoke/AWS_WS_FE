import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes and their required roles
const protectedRoutes = {
  '/dashboard/admin': ['ADMIN'],
  '/dashboard/gym-staff': ['GYM_STAFF'],
  '/dashboard/pt': ['PT_USER'],
  '/dashboard': ['CLIENT_USER', 'PT_USER', 'GYM_STAFF', 'ADMIN'],
  '/profile': ['CLIENT_USER', 'PT_USER', 'GYM_STAFF', 'ADMIN'],
  '/offers/create': ['PT_USER', 'GYM_STAFF'],
  '/gyms/create': ['GYM_STAFF'],
  '/trainers/create': ['PT_USER'],
};

// Define public routes that don't require authentication
const publicRoutes = [
  '/',
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/gyms',
  '/trainers',
  '/offers',
  '/search',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

// Define API routes that require authentication
const protectedApiRoutes = [
  '/api/auth/logout',
  '/api/users',
  '/api/gyms',
  '/api/trainers',
  '/api/offers',
  '/api/reviews',
  '/api/admin',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the route is public
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Check if it's an API route
  if (pathname.startsWith('/api/')) {
    // For API routes, we'll handle auth in the API handlers
    // This middleware just ensures the route exists
    return NextResponse.next();
  }

  // Get user role from token (this would be implemented with JWT verification)
  const userRole = getUserRoleFromToken(request);
  
  if (!userRole) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Check if user has access to the protected route
  const requiredRoles = getRequiredRolesForRoute(pathname);
  
  if (requiredRoles && !requiredRoles.includes(userRole)) {
    // Redirect to appropriate dashboard based on user role
    const dashboardPath = getDashboardPathForRole(userRole);
    return NextResponse.redirect(new URL(dashboardPath, request.url));
  }

  return NextResponse.next();
}

function getUserRoleFromToken(request: NextRequest): string | null {
  // TODO: Implement JWT token verification
  // For now, we'll check for a mock token in cookies or headers
  
  const token = request.cookies.get('auth_token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return null;
  }

  // Mock implementation - in real app, verify JWT and extract role
  try {
    // This would be replaced with actual JWT verification
    const mockUser = JSON.parse(atob(token));
    return mockUser.role || null;
  } catch {
    return null;
  }
}

function getRequiredRolesForRoute(pathname: string): string[] | null {
  // Check exact matches first
  if (protectedRoutes[pathname as keyof typeof protectedRoutes]) {
    return protectedRoutes[pathname as keyof typeof protectedRoutes];
  }

  // Check for dynamic routes (e.g., /gyms/[id]/edit)
  for (const [route, roles] of Object.entries(protectedRoutes)) {
    if (pathname.startsWith(route)) {
      return roles;
    }
  }

  return null;
}

function getDashboardPathForRole(role: string): string {
  switch (role) {
    case 'ADMIN':
      return '/dashboard/admin';
    case 'GYM_STAFF':
      return '/dashboard/gym-staff';
    case 'PT_USER':
      return '/dashboard/pt';
    case 'CLIENT_USER':
      return '/dashboard';
    default:
      return '/dashboard';
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
