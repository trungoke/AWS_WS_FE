# Vertex - Frontend

A centralized web marketplace connecting gyms and personal trainers with clients. Built with Next.js 14, TypeScript, TailwindCSS, and AWS integration.

## 🚀 Features

### Core Functionality
- **Landing Page** with advanced search filters (location, cost, availability, rating)
- **Gym Listings** with detailed pages, contact info, offers, and ratings
- **Personal Trainer Listings** with profiles, specialties, availability, and ratings
- **Offer Feed** with card layout supporting both gym and PT offers
- **Role-based Authentication** with Cognito integration
- **Role-based Dashboards** for different user types

### User Roles & Permissions
- **Client_User**: Anonymous access, login for favorites/rating/reporting
- **PT_User**: Create personal profile, set availability & cost, manage offers
- **Gym_Staff**: Register/manage gym, approve PTs, create gym offers
- **Admin**: Approve reported content, manage subscriptions & ranking priority

### Technical Features
- Next.js 14 with App Router
- TypeScript for type safety
- TailwindCSS for styling
- Zustand for global state management
- Axios for API communication
- AWS S3 integration for media handling
- Role-based routing middleware
- Responsive design

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── dashboard/                # Role-based dashboards
│   │   ├── admin/page.tsx
│   │   ├── gym-staff/page.tsx
│   │   ├── pt/page.tsx
│   │   └── layout.tsx
│   ├── gyms/                     # Gym pages
│   │   ├── [id]/page.tsx
│   │   └── page.tsx
│   ├── trainers/                 # Personal trainer pages
│   │   ├── [id]/page.tsx
│   │   └── page.tsx
│   ├── offers/                   # Offer pages
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                  # Landing page
│   └── providers.tsx
├── components/                   # Reusable components
│   ├── dashboard/                # Dashboard components
│   ├── gyms/                     # Gym-specific components
│   ├── landing/                  # Landing page components
│   ├── layout/                   # Layout components
│   ├── offers/                   # Offer components
│   ├── trainers/                 # Trainer components
│   └── ui/                       # Base UI components
├── lib/                          # Utilities and configurations
│   ├── api.ts                    # API client with Axios
│   ├── aws.ts                    # AWS S3 integration
│   └── utils.ts                  # Utility functions
├── store/                        # Zustand stores
│   ├── authStore.ts              # Authentication state
│   ├── searchStore.ts            # Search state
│   └── uiStore.ts                # UI state
├── types/                        # TypeScript type definitions
│   └── index.ts
├── middleware.ts                 # Role-based routing middleware
└── ...config files
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- AWS account (for S3 and Cognito)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd easy-body-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   # AWS Configuration
   NEXT_PUBLIC_AWS_REGION=us-east-1
   NEXT_PUBLIC_S3_BUCKET=your-bucket-name
   AWS_ACCESS_KEY_ID=your-access-key
   AWS_SECRET_ACCESS_KEY=your-secret-key

   # API Configuration
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api

   # Cognito Configuration
   NEXT_PUBLIC_COGNITO_USER_POOL_ID=your-user-pool-id
   NEXT_PUBLIC_COGNITO_CLIENT_ID=your-client-id
   NEXT_PUBLIC_COGNITO_REGION=us-east-1
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Key Components

### Landing Page
- Hero section with search functionality
- Advanced search filters
- Featured gyms, trainers, and offers
- How it works section
- Testimonials and CTA

### Search & Filtering
- Location-based search with radius
- Price range filtering
- Rating and availability filters
- Amenities and specialties filtering
- Real-time search results

### Role-based Dashboards
- **Client Dashboard**: Bookings, favorites, profile management
- **PT Dashboard**: Client management, session scheduling, offer creation
- **Gym Staff Dashboard**: Gym management, trainer approvals, offer management
- **Admin Dashboard**: Platform oversight, moderation, analytics

### Authentication
- Login/Register pages with form validation
- Role-based access control
- JWT token management
- Social OAuth integration (Google, Facebook)

## 🔧 API Integration

The frontend is designed to work with a Spring Boot backend. Key API endpoints include:

- **Authentication**: `/api/auth/*`
- **Gyms**: `/api/gyms/*`
- **Trainers**: `/api/trainers/*`
- **Offers**: `/api/offers/*`
- **Reviews**: `/api/reviews/*`
- **Search**: `/api/search/*`
- **Admin**: `/api/admin/*`

## 🎯 Key Features Implemented

### ✅ Completed
- [x] Next.js 14 App Router setup
- [x] TypeScript configuration
- [x] TailwindCSS styling system
- [x] Zustand state management
- [x] Authentication pages (Login/Register)
- [x] Landing page with search filters
- [x] Gym listing and detail pages
- [x] Personal trainer listing and detail pages
- [x] Offer feed with card layout
- [x] Role-based dashboards (Admin, Gym Staff, PT, Client)
- [x] Role-based routing middleware
- [x] API utilities and Axios configuration
- [x] AWS S3 integration for media
- [x] Responsive design
- [x] Component library with reusable UI components

### 🚧 Next Steps (Backend Integration)
- [ ] Connect to actual Spring Boot API
- [ ] Implement real Cognito authentication
- [ ] Add real-time notifications
- [ ] Implement booking system
- [ ] Add payment integration
- [ ] Set up email notifications
- [ ] Add advanced analytics
- [ ] Implement real-time chat

## 🎨 Design System

The project uses a consistent design system with:
- **Primary Colors**: Blue-based palette
- **Typography**: Inter font family
- **Components**: Reusable UI components with consistent styling
- **Layout**: Responsive grid system
- **Icons**: Lucide React icon library

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Security Features

- Role-based access control with Cognito integration
- JWT token authentication with automatic refresh
- Protected routes with middleware
- Input validation and sanitization
- XSS protection
- CSRF protection
- AWS Cognito security features

## 🔧 API Integration

The frontend is fully integrated with the provided Spring Boot API:

### Authentication Flow
1. User signs up/signs in via Cognito
2. JWT token is obtained and stored
3. User data is synchronized with backend via `/api/v1/auth/register`
4. All API calls include JWT token in Authorization header

### Key API Endpoints Used
- **Auth**: `/api/v1/auth/register`, `/api/v1/auth/me`
- **Gyms**: `/api/v1/gyms/*`, `/api/v1/gyms/search`
- **PTs**: `/api/v1/pt-users/*`
- **Offers**: `/api/v1/offers/*`, `/api/v1/search/offers`
- **Admin**: `/api/v1/admin/*`
- **Media**: `/api/v1/media/presigned-url`

### Search & Filtering
- Location-based search using PostGIS coordinates
- Advanced filtering by price, rating, availability
- Pagination support for large result sets
- Real-time search with debouncing

## 🚀 Deployment

The application is ready for deployment on:
- Vercel (recommended for Next.js)
- AWS Amplify
- Netlify
- Any Node.js hosting platform

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

Please follow the established coding standards and component patterns when contributing to this project.

## 📞 Support

For technical support or questions, please contact the development team.
